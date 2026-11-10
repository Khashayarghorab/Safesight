import { Eyebrow } from './shared';
import { Icon } from './icons';

export default function ResearchAffiliation() {
  return <section className="research-origin" aria-labelledby="research-origin-heading">
    <div className="container section">
      <div className="research-origin-heading">
        <div><Eyebrow>Our research environment</Eyebrow><h2 id="research-origin-heading">Research-led.<br />Human-centred.</h2></div>
        <p>SafeSight is being developed at <strong>EPM Research</strong> at the <strong>University of Calgary.</strong></p>
      </div>
      <div className="research-origin-institutions">
        <a className="institution-card" href="https://epmresearch.com/" aria-label="Visit EPM Research website">
          <div className="institution-artwork"><div className="institution-logo-window institution-logo-epm"><img src="/brand/epm-research.png" alt="EPM Research logo" width="661" height="461" loading="lazy" /></div></div>
          <div className="institution-caption"><span className="mono">RESEARCH GROUP</span><strong>Engineering Project Management Research</strong><span className="institution-visit">Visit EPM Research <Icon name="diagonal" /></span></div>
        </a>
        <a className="institution-card" href="https://www.ucalgary.ca/" aria-label="Visit University of Calgary website">
          <div className="institution-artwork"><div className="institution-logo-window institution-logo-university"><img src="/brand/university-of-calgary.png" alt="University of Calgary logo" width="1292" height="964" loading="lazy" /></div></div>
          <div className="institution-caption"><span className="mono">UNIVERSITY</span><strong>University of Calgary</strong><span className="institution-visit">Visit University of Calgary <Icon name="diagonal" /></span></div>
        </a>
      </div>
    </div>
  </section>;
}
