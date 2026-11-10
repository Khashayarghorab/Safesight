import { Eyebrow } from './shared';

export default function DemoVideo() {
  return <section id="video" className="container demo-section" aria-labelledby="demo-heading">
    <div className="demo-heading">
      <Eyebrow>SafeSight in focus</Eyebrow>
      <h2 id="demo-heading">See SafeSight<br /><span className="text-muted">in action.</span></h2>
      <p>A closer look at our work in AI-assisted construction safety.</p>
    </div>
    <div className="demo-player">
      <iframe
        src="https://www.youtube-nocookie.com/embed/PQEO9dbzTLs"
        loading="eager"
        title="SafeSight video on YouTube"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  </section>;
}
