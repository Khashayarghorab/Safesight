import { Icon } from './icons';

export default function ResearchAffiliation() {
  return (
    <section className="research-origin" aria-labelledby="research-origin-heading">
      <div className="container research-origin-inner">
        <img src="/brand/epm-research.png" alt="" width="661" height="461" loading="lazy" />
        <div>
          <h2 id="research-origin-heading">Our research group</h2>
          <p>We are the Engineering Project Management (EPM) research group at the Schulich School of Engineering, University of Calgary.</p>
          <p>EPM Research is led by its current Chair Dr. <a href="https://profiles.ucalgary.ca/pouya-zangeneh">Pouya Zangeneh</a> with the mandate to conduct core research that elevates the industry.</p>
          <p>SafeSight is one of the research projects being developed within our group.</p>
          <a className="text-link" href="https://epmresearch.com/">Visit EPM Research <Icon name="diagonal" /></a>
        </div>
      </div>
    </section>
  );
}
