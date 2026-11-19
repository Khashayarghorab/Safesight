'use client';
import { useRef, useState } from 'react';
import { Icon } from './icons';
const stages = [
  {
    label: 'Observe',
    body: 'Exploring how smart glasses and field notes could capture context for clearer safety records.',
    icon: 'glasses',
    panelLabel: 'FIELD OBSERVATION',
    panelTitle: 'The context is on site.',
    panelBody: 'During a site walk, a supervisor photographs a slab edge and records a spoken note about the location for review.',
  },
  {
    label: 'Understand',
    body: 'Evaluating how AI could organize observations and suggest potential hazards for qualified human review.',
    icon: 'layers',
    panelLabel: 'AI-ASSISTED REASONING',
    panelTitle: 'A question worth checking.',
    example: '“I don’t see a guardrail along the edge of this slab. Can you check what fall protection is in place on site?”',
  },
  {
    label: 'Decide',
    body: 'A qualified person checks the observation on site and decides whether action is needed.',
    icon: 'shield',
    panelLabel: 'HUMAN REVIEW',
    panelTitle: 'The decision stays human.',
    panelBody: 'A qualified person checks what fall protection is in place at the slab edge and decides whether any action is needed.',
  },
  {
    label: 'Act',
    body: 'Assign the action, track progress, and verify completion.',
    icon: 'check',
    panelLabel: 'FOLLOW-UP',
    panelTitle: 'Follow through on the action.',
    panelBody: 'If action is needed, the team records who is responsible, tracks progress, and verifies on site that the agreed action is complete.',
  },
] as const;
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
      <div className="workflow-image"><img src="/images/site-perspective.webp" alt="Illustrative photo of a supervisor looking across a concrete building site" width="1400" height="1050" loading="lazy" /><div className="viewfinder" aria-hidden="true"><span /><span /><span /><span /></div><div className="workflow-image-label"><Icon name={stage.icon} /><span>{stage.label}</span><span className="mono">0{active + 1} / 0{stages.length}</span></div></div>
      <div className="workflow-card" key={active}>
        <span className="mono panel-eyebrow">0{active + 1} / {stage.panelLabel}</span>
        <h3>{stage.panelTitle}</h3>
        {'example' in stage ? (
          <div className="safi-example">
            <img src="/images/safi.webp" alt="Safi, an orange mascot in a hard hat" width="66" height="78" />
            <div>
              <span className="mono">Example AI suggestion</span>
              <strong>Meet Safi</strong>
              <p>{stage.example}</p>
            </div>
          </div>
        ) : <p>{stage.panelBody}</p>}
      </div>
    </div>
  </div>;
}
