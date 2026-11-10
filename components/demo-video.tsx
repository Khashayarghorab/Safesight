'use client';

import { useState } from 'react';
import { Eyebrow } from './shared';

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return <section className="container section demo-section" aria-labelledby="demo-heading">
    <div className="demo-heading">
      <Eyebrow>See the idea in motion</Eyebrow>
      <h2 id="demo-heading">Watch the SafeSight video.</h2>
      <p>A closer look at SafeSight and our ongoing work in AI-assisted construction safety.</p>
    </div>
    <div className="demo-player">
      {playing ? <iframe
        src="https://www.youtube-nocookie.com/embed/PQEO9dbzTLs?autoplay=1"
        title="SafeSight video on YouTube"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      /> : <button className="demo-play" type="button" onClick={() => setPlaying(true)} aria-label="Play the SafeSight video on YouTube">
        <img src="/images/site-perspective.webp" alt="" width="1400" height="1050" loading="lazy" />
        <span className="demo-play-content"><span className="demo-play-icon" aria-hidden="true">▶</span><span>Watch SafeSight</span><span className="mono">PLAY VIDEO · YOUTUBE</span></span>
        <span className="demo-poster-label">Illustrative cover image</span>
      </button>}
    </div>
  </section>;
}
