import Link from 'next/link';
import { PageIntro } from '@/components/shared';
import { Icon } from '@/components/icons';
export default function NotFound() {
  return <><PageIntro label="404 / Page not found" title="Let’s get you back on site."><p>That page isn’t here. The next step is just below.</p><Link className="button" href="/">Return to SafeSight <Icon name="arrow" /></Link></PageIntro></>;
}
