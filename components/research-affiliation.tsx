import { Icon } from './icons';

export default function ResearchAffiliation() {
  return (
    <section className="research-origin" aria-labelledby="research-origin-heading">
      <div className="container research-origin-inner">
        <img src="/brand/epm-research.png" alt="" width="661" height="461" loading="lazy" />
        <div>
          <h2 id="research-origin-heading">Our research group</h2>
          <p>SafeSight is being developed within the Engineering Project Management Research group at the University of Calgary.</p>
          <a className="text-link" href="https://epmresearch.com/">Visit EPM Research <Icon name="diagonal" /></a>
        </div>
      </div>
    </section>
  );
}
