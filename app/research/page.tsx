import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { PageIntro, Eyebrow, Pilot } from '@/components/shared';
import { Icon } from '@/components/icons';
import { publications, ongoingStudies, researchPosts as curatedPosts } from '@/lib/research';
import { getResearchPosts } from '@/lib/research-feed.mjs';

export const dynamic = 'force-static';

export const metadata = pageMetadata(
  'AI Research for Construction Safety',
  'Explore research on AI for construction safety, including job safety analysis, risk assessment, and ongoing studies at EPM Research.',
  '/research/',
);

export default async function Research() {
  const researchPosts = await getResearchPosts(curatedPosts);
  return <>
    <PageIntro label="Research / Studies & perspectives" title="AI research for construction safety"><p>Read the studies behind SafeSight’s work on job safety analysis, risk assessment, and human review.</p></PageIntro>
    <nav className="container research-section-nav" aria-label="Research sections"><a href="#publications">Publications <span>{String(publications.length).padStart(2, '0')}</span></a><a href="#perspectives">From the blog <span>{String(researchPosts.length).padStart(2, '0')}</span></a><a href="#ongoing">Ongoing research <span>{String(ongoingStudies.length).padStart(2, '0')}</span></a></nav>
    <section id="publications" className="container research-library" aria-labelledby="publications-heading">
      <div className="research-library-heading"><div><Eyebrow>Explore the studies</Eyebrow><h2 id="publications-heading">Selected publications.</h2></div><span className="publication-count mono">{String(publications.length).padStart(2, '0')} STUDIES</span></div>
      <div className="publication-list">
        {publications.map((publication, index) => <article className="publication" key={publication.id} aria-labelledby={`publication-${publication.id}`}>
          <div className="publication-index"><span className="mono">{String(index + 1).padStart(2, '0')}</span><span className="publication-year">{publication.year}</span></div>
          <div className="publication-content">
            <div className="publication-topics">{publication.topics.map(topic => <span key={topic}>{topic}</span>)}</div>
            <h3 id={`publication-${publication.id}`}>{publication.publisherUrl ? <a href={publication.publisherUrl}>{publication.title}</a> : publication.title}</h3>
            <p className="publication-authors">{publication.authors.join(', ')}</p>
            <p className="publication-journal"><cite>{publication.journal ?? publication.venue}</cite><span>{publication.citation}</span></p>
            {publication.id === 'llm-multiagent-jsa' && (
              <Link className="text-link" href="/research/ai-construction-job-safety-analysis/">
                How AI can support job safety analysis <Icon name="arrow" />
              </Link>
            )}
            {(publication.publisherUrl || publication.scholarUrl) && <div className="publication-links">{publication.publisherUrl && <a className="text-link" href={publication.publisherUrl} aria-label={`View publication: ${publication.title}`}>View publication <Icon name="diagonal" /></a>}{publication.scholarUrl && <a href={publication.scholarUrl} aria-label={`Google Scholar record: ${publication.title}`}>Google Scholar <Icon name="diagonal" /></a>}</div>}
          </div>
        </article>)}
      </div>
      <p className="research-context-note">These publications provide research context relevant to SafeSight. They do not establish the performance or availability of the product in development.</p>
    </section>
    <section id="perspectives" className="research-perspectives" aria-labelledby="perspectives-heading"><div className="container section">
      <div className="research-library-heading"><div><Eyebrow>From EPM Research</Eyebrow><h2 id="perspectives-heading">Ideas beyond the paper.</h2></div><a className="text-link" href="https://epmresearch.com/">Explore EPM Research <Icon name="diagonal" /></a></div>
      <p className="perspectives-intro">Writing from EPM Research relevant to construction safety, AI-assisted assessment, and human-led decisions. Read each article on its original website.</p>
      <div className="research-post-grid">{researchPosts.map(post => <article className="research-post-card" key={post.id}>
        {post.image && <img className="research-post-cover" src={post.image} alt={`Cover for ${post.title}`} width="1200" height="630" loading="lazy" decoding="async" referrerPolicy="no-referrer" />}
        <span className="mono">EPM RESEARCH / PERSPECTIVES</span><h3><a href={post.href}>{post.title}</a></h3><p>{post.description}</p><div className="research-post-meta"><span>{post.authors}</span><time dateTime={post.date}>{post.dateLabel}</time></div><a className="text-link" href={post.href} aria-label={`Read article: ${post.title}`}>Read on EPM Research <Icon name="diagonal" /></a>
      </article>)}</div>
    </div></section>
    <section id="ongoing" className="container section ongoing-research" aria-labelledby="ongoing-heading">
      <div className="research-library-heading"><div><Eyebrow>Questions we are exploring</Eyebrow><h2 id="ongoing-heading">Ongoing research.</h2></div><span className="publication-count mono">{String(ongoingStudies.length).padStart(2, '0')} STUDIES</span></div>
      <div className="ongoing-grid">{ongoingStudies.map(study => <article className="ongoing-card" key={study.id} aria-labelledby={`ongoing-${study.id}`}>
        <h3 id={`ongoing-${study.id}`}>{study.title}</h3><p>{study.focus}</p>
      </article>)}</div>
    </section>
    <Pilot />
  </>;
}
