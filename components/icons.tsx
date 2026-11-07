import type { SVGProps } from 'react';
type IconName = 'arrow' | 'diagonal' | 'eye' | 'scan' | 'people' | 'shield' | 'glasses' | 'layers' | 'check' | 'plus' | 'mail' | 'download' | 'copy';
const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h15M13 5l7 7-7 7" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  scan: <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M7 12h10" />,
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v3" /></>,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  glasses: <path d="M2 12h7l1 1h4l1-1h7v4a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1H9v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4ZM2 12l2-7h3M22 12l-2-7h-3" />,
  layers: <path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" />,
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></>,
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
  copy: <><rect x="8" y="8" width="12" height="13" rx="1" /><path d="M16 8V3H3v13h5" /></>,
};
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
