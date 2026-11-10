import test from 'node:test';
import assert from 'node:assert/strict';
import { parseResearchFeed, getResearchPosts, isSafeSightPost } from '../lib/research-feed.mjs';

const item = (slug, date = 'Mon, 09 Nov 2026 12:00:00 GMT', extra = '') => `<item><title><![CDATA[Safety &amp; AI]]></title><link>https://epmresearch.com/p/${slug}</link><description><![CDATA[<p>Clear &amp; practical guidance.</p><script>bad()</script>]]></description><dc:creator>Test Author</dc:creator><pubDate>${date}</pubDate>${extra}</item>`;
const feed = items => `<rss version="2.0"><channel><title>Publication title</title>${items}</channel></rss>`;

test('RSS items retain attribution and dates and render descriptions as plain text', () => {
  const [post] = parseResearchFeed(feed(item('safety')));
  assert.equal(post.title, 'Safety & AI');
  assert.equal(post.description, 'Clear & practical guidance.');
  assert.equal(post.authors, 'Test Author');
  assert.equal(post.date, '2026-11-09');
  assert.equal(post.href, 'https://epmresearch.com/p/safety');
});

test('newest unique posts are selected, capped at three', () => {
  const posts = parseResearchFeed(feed(item('old', '01 Jan 2024 12:00:00 GMT') + item('new') + item('new') + item('middle', '01 Jan 2025 12:00:00 GMT') + item('other', '01 Jan 2023 12:00:00 GMT')));
  assert.deepEqual(posts.map(p => p.href.split('/').pop()), ['new', 'middle', 'old']);
});

test('invalid dates, unsafe links and unrelated hosts are excluded', () => {
  const unsafe = item('bad').replace('https://epmresearch.com/p/bad', 'javascript:alert(1)');
  const unrelated = item('other').replace('https://epmresearch.com/p/other', 'https://example.com/p/other');
  assert.equal(parseResearchFeed(feed(unsafe + unrelated + item('invalid', 'not a date'))).length, 0);
});

test('only HTTPS cover images on allowed publisher image hosts are retained', () => {
  const good = '<enclosure url="https://substackcdn.com/image/cover.png?x=1&amp;y=2" type="image/png" />';
  const bad = '<enclosure url="https://unrelated.example/track.png" type="image/png" />';
  assert.equal(parseResearchFeed(feed(item('good', undefined, good)))[0].image, 'https://substackcdn.com/image/cover.png?x=1&y=2');
  assert.equal(parseResearchFeed(feed(item('bad', undefined, bad)))[0].image, undefined);
});

test('unsupported markup and XML entity declarations are rejected', () => {
  assert.throws(() => parseResearchFeed('<html>Unavailable</html>'));
  assert.throws(() => parseResearchFeed('<!DOCTYPE rss [<!ENTITY x SYSTEM "file:///secret">]>' + feed(item('unsafe'))));
});

test('successful build fetch uses parsed posts and an eight-second abort signal', async () => {
  const posts = await getResearchPosts([], async (url, options) => {
    assert.equal(url, 'https://epmresearch.com/feed');
    assert.equal(options.cache, 'force-cache');
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(feed(item('fresh')));
  });
  assert.equal(posts[0].href, 'https://epmresearch.com/p/fresh');
});

test('network failure, HTTP error and empty feed preserve curated fallback', async () => {
  const fallback = [{ id: 'curated' }];
  for (const fetcher of [async () => { throw new Error('Offline'); }, async () => new Response('Unavailable', { status: 503 }), async () => new Response(feed(''))]) {
    assert.equal(await getResearchPosts(fallback, fetcher), fallback);
  }
});

test('SafeSight topics are retained while announcements and general posts are excluded', () => {
  for (const title of ['AI for construction safety inspection', 'Smart glasses for hazard recognition', 'Fine-tuning vision-language models for construction', 'AI-driven risk management']) assert.equal(isSafeSightPost({ title }), true, title);
  for (const title of ['Hiring: AI and Construction Safety Researcher', 'Construction Safety Conference', 'Project opportunities', 'University news', 'BIM for cost estimating']) assert.equal(isSafeSightPost({ title }), false, title);
});

test('filtering happens before the three-card limit', async () => {
  const unrelated = ['one', 'two', 'three'].map(slug => item(slug).replace('Safety &amp; AI', 'University news')).join('');
  const olderRelevant = item('relevant', '01 Jan 2025 12:00:00 GMT');
  const posts = await getResearchPosts([], async () => new Response(feed(unrelated + olderRelevant)));
  assert.equal(posts.length, 1);
  assert.equal(posts[0].href, 'https://epmresearch.com/p/relevant');
});

test('unrelated-only feeds preserve curated articles and partial matches fill without duplicates', async () => {
  const fallback = [{ id: 'curated', title: 'Editorial selection', href: 'https://epmresearch.com/p/curated' }];
  const unrelated = item('news').replace('Safety &amp; AI', 'University news');
  assert.equal(await getResearchPosts(fallback, async () => new Response(feed(unrelated))), fallback);
  const posts = await getResearchPosts(fallback, async () => new Response(feed(item('fresh') + item('curated'))));
  assert.equal(posts.length, 2);
  assert.equal(new Set(posts.map(post => post.href)).size, 2);
});

test('missing RSS image retains curated cover across publication domain aliases', async () => {
  const cover = 'https://substack-post-media.s3.amazonaws.com/public/images/cover.png';
  const fallback = [{ id: 'dragon', title: 'How to Train Your GenAI Dragon', href: 'https://epmresearch.com/p/dragon', image: cover }];
  const xml = feed(item('dragon').replace('https://epmresearch.com/p/dragon', 'https://epmresearch.substack.com/p/dragon?source=rss'));
  const posts = await getResearchPosts(fallback, async () => new Response(xml));
  assert.equal(posts.length, 1);
  assert.equal(posts[0].image, cover);
  const withImage = await getResearchPosts(fallback, async () => new Response(feed(item('dragon', undefined, '<enclosure url="https://substackcdn.com/new.png" type="image/png" />'))));
  assert.equal(withImage[0].image, 'https://substackcdn.com/new.png');
});
