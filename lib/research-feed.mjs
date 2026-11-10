const FEED_URL = 'https://epmresearch.com/feed';
const MAX_BYTES = 2_000_000;
const POST_HOSTS = new Set(['epmresearch.com', 'www.epmresearch.com', 'epmresearch.substack.com']);
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '\u2013', mdash: '\u2014', lsquo: '\u2018', rsquo: '\u2019', ldquo: '\u201c', rdquo: '\u201d', hellip: '\u2026' };

function decode(value) {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, name) => {
    if (name[0] !== '#') return ENTITIES[name.toLowerCase()] ?? entity;
    const number = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : Number(name.slice(1));
    return number > 0 && number <= 0x10ffff && !(number >= 0xd800 && number <= 0xdfff) ? String.fromCodePoint(number) : '';
  });
}

function plainText(value) {
  return decode(value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1'))
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function field(item, name) {
  return item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}\\s*>`, 'i'))?.[1] ?? '';
}

function postUrl(value) {
  try {
    const url = new URL(plainText(value));
    return url.protocol === 'https:' && !url.username && !url.password && POST_HOSTS.has(url.hostname) && url.pathname.startsWith('/p/') ? url.href : undefined;
  } catch { return undefined; }
}

function coverUrl(item) {
  const enclosure = item.match(/<enclosure\b[^>]*>/i)?.[0] ?? '';
  const raw = enclosure.match(/\burl\s*=\s*(["'])(.*?)\1/i)?.[2];
  if (!raw) return undefined;
  try {
    const url = new URL(decode(raw));
    const host = url.hostname;
    return url.protocol === 'https:' && !url.username && !url.password && (host === 'substackcdn.com' || host.endsWith('.substackcdn.com') || host === 'substack-post-media.s3.amazonaws.com') ? url.href : undefined;
  } catch { return undefined; }
}

/** Read the RSS 2.0 item fields used by Substack; unsupported feeds use the fallback. */
/** @returns {import('./research').ResearchPost[]} */
export function parseResearchFeed(xml, limit = 3) {
  if (typeof xml !== 'string' || Buffer.byteLength(xml) > MAX_BYTES || /<!DOCTYPE|<!ENTITY/i.test(xml) || !/<rss\b/i.test(xml) || !/<\/rss\s*>/i.test(xml)) throw new Error('Unsupported RSS feed');
  const items = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item\s*>/gi)].slice(0, 100);
  const seen = new Set();
  const posts = [];
  for (const [, item] of items) {
    const title = plainText(field(item, 'title'));
    const href = postUrl(field(item, 'link'));
    const date = new Date(plainText(field(item, 'pubDate')));
    if (!title || !href || seen.has(href) || !Number.isFinite(date.getTime())) continue;
    const description = plainText(field(item, 'description'));
    const day = date.toISOString().slice(0, 10);
    seen.add(href);
    posts.push({
      id: href,
      title,
      description: description.length > 180 ? description.slice(0, 177).trimEnd() + '\u2026' : description,
      authors: plainText(field(item, 'dc:creator')) || plainText(field(item, 'author')) || 'EPM Research',
      date: day,
      dateLabel: new Date(day + 'T00:00:00Z').toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }),
      href,
      image: coverUrl(item),
    });
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}

/** Conservative topic matching; the curated fallback is also an explicit editorial selection. */
export function isSafeSightPost(post) {
  const title = post.title ?? '';
  if (/\b(hiring|vacanc(?:y|ies)|job openings?|opportunities|conference|webinar|scholarships?|call for (?:papers|abstracts))\b/i.test(title)) return false;
  const text = `${title} ${post.description ?? ''}`;
  const safetyTopic = /\b(safety|hazards?|inspection|risk reasoning|risk assessment|risk management)\b/i.test(text);
  const relevantContext = /\b(construction|engineering|project|workers?|site|AI|LLMs?|VLMs?)\b/i.test(text);
  const relevantMethods = /\b(fine[- ]tuning|reinforcement learning|supervised learning|vision[- ]language|retrieval[- ]augmented|RAG|multi[- ]agent|prompt(?:ing| engineering))\b/i.test(text);
  return (safetyTopic && relevantContext) || /\bsmart[- ]glasses\b/i.test(text) || (relevantMethods && /\b(construction|engineering|project management)\b/i.test(text));
}

function articleKey(href) {
  try { return new URL(href).pathname.replace(/\/+$/, ''); }
  catch { return href; }
}

/** @param {import('./research').ResearchPost[]} fallback */
export async function getResearchPosts(fallback, fetcher = fetch) {
  try {
    const response = await fetcher(FEED_URL, { cache: 'force-cache', signal: AbortSignal.timeout(8000), headers: { Accept: 'application/rss+xml, application/xml, text/xml' } });
    if (!response.ok || Number(response.headers.get('content-length')) > MAX_BYTES) throw new Error('Feed request failed');
    if (response.url && !POST_HOSTS.has(new URL(response.url).hostname)) throw new Error('Unexpected feed host');
    const curated = new Map(fallback.map(post => [articleKey(post.href), post]));
    // Filter the available feed before taking three, so newer unrelated posts cannot hide matches.
    const posts = parseResearchFeed(await response.text(), 100).filter(post => curated.has(articleKey(post.href)) || isSafeSightPost(post));
    if (!posts.length) throw new Error('Feed contains no relevant posts');
    const unique = new Map();
    for (const post of [...posts, ...fallback]) {
      const key = articleKey(post.href);
      if (!unique.has(key)) unique.set(key, { ...post, image: post.image ?? curated.get(key)?.image });
    }
    return [...unique.values()].slice(0, 3);
  } catch {
    console.warn('EPM Research RSS unavailable; using curated blog posts.');
    return fallback;
  }
}
