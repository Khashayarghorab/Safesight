'use client';
import { useRef, useState } from 'react';
import { Icon } from './icons';
const stages = [
  { label: 'Observe', body: 'Exploring how smart glasses and field notes could capture context for clearer safety records.', icon: 'glasses' as const, panelLabel: '01 / FIELD OBSERVATION', panelTitle: 'The context is on site.', panelBody: 'During a site walk, a supervisor notices materials narrowing an access route. A photo and a spoken note could record where the materials are and how they affect access.', tags: ['Worker perspective', 'Site context'], note: 'An observation for human review, not a confirmed hazard.' },
  { label: 'Understand', body: 'Evaluating how AI could organize observations and suggest potential hazards for qualified human review.', icon: 'layers' as const, panelLabel: '02 / AI-ASSISTED REASONING', panelTitle: 'A question worth checking.', panelBody: 'AI could help organize the note and ask whether access is restricted. A qualified person would check the evidence and site context.', tags: ['Potential risk', 'Context matters'], note: 'AI may be incomplete or incorrect. Verification is essential.' },
  { label: 'Decide', body: 'Exploring support for people to record action responsibilities and review progress after deciding what is needed.', icon: 'shield' as const, panelLabel: '03 / HUMAN REVIEW', panelTitle: 'The decision stays human.', panelBody: 'A qualified person would check the route and decide what action is needed. Intended follow-up support would help record responsibility and progress; people would verify completion.', tags: ['Human decisions', 'Intended follow-up'], note: 'No autonomous safety decisions or guaranteed detection.' },
];
export default function Workflow() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];
  return <div className="workflow">
    <div className="workflow-stages">
      <div role="tablist" aria-label="Explore the intended workflow" aria-orientation="vertical">
      {stages.map((item, index) => <button key={item.label} id={`stage-${index}`} ref={element => { buttons.current[index] = element; }} className={`workflow-stage ${index === active ? 'is-active' : ''}`} role="tab" aria-selected={active === index} aria-controls="workflow-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
        let next = active;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (active + 1) % stages.length;
        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (active + stages.length - 1) % stages.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = stages.length - 1;
        else return;
        event.preventDefault(); setActive(next); buttons.current[next]?.focus();
      }}><span className="stage-number mono">0{index + 1}</span><span className="stage-copy"><span className="stage-title">{item.label}</span><span className="stage-body">{item.body}</span></span><Icon name="arrow" /></button>)}
      </div>
      <p className="workflow-disclaimer">An intended workflow, currently under development.<br />Capabilities and field performance are not yet validated.</p>
    </div>
    <div id="workflow-panel" role="tabpanel" aria-labelledby={`stage-${active}`} tabIndex={0} className="workflow-panel">
      <div className="workflow-image"><img src="/images/site-perspective.webp" alt="Supervisor looking across a concrete building site" width="1400" height="1050" loading="lazy" /><div className="viewfinder" aria-hidden="true"><span /><span /><span /><span /></div><div className="workflow-image-label"><Icon name={stage.icon} /><span>{stage.label}</span><span className="mono">0{active + 1} / 03</span></div></div>
      <div className="workflow-card" key={active}><span className="mono panel-eyebrow">{stage.panelLabel}</span><h3>{stage.panelTitle}</h3><p>{stage.panelBody}</p><div className="workflow-tags">{stage.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p className="panel-note"><Icon name="eye" />{stage.note}</p></div>
    </div>
  </div>;
}
