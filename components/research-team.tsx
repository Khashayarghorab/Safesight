import { Icon } from '@/components/icons';

export default function ResearchTeam() {
  return (
    <section className="container research-team" aria-labelledby="research-team-heading">
      <h2 id="research-team-heading">Research leadership</h2>
      <div className="research-team-grid">
        <article className="research-team-profile">
          <img
            className="research-team-portrait"
            src="/images/research-team/pouya-zangeneh.jpg"
            alt=""
            width={260}
            height={320}
            loading="lazy"
            decoding="async"
          />
          <div className="research-team-profile-copy">
            <h3>Dr. Pouya Zangeneh</h3>
            <p className="research-team-role">Endowed Chair in Engineering Project Management</p>
            <p>Dr. Zangeneh studies how generative AI can support construction and project management, and how engineering teams assess risk in complex projects.</p>
            <a className="text-link" href="https://profiles.ucalgary.ca/pouya-zangeneh">
              University of Calgary profile <Icon name="diagonal" />
            </a>
          </div>
        </article>
        <article className="research-team-profile">
          <img
            className="research-team-portrait"
            src="/images/research-team/khashayar-ghorab.jpg"
            alt=""
            width={640}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <div className="research-team-profile-copy">
            <h3>Khashayar Ghorab</h3>
            <p className="research-team-role">PhD Candidate in Civil Engineering</p>
            <p>Khashayar studies how construction teams can use AI and smart glasses to spot hazards and decide how to respond on site.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
