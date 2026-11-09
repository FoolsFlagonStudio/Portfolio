import type { CaseStudy } from '../case-study/types';
import { victual } from './victual';
import { sofron } from './sofron';

export const caseStudies: CaseStudy[] = [victual, sofron];

export interface ProjectCard {
  slug: string;
  name: string;
  summary: string;
  status: string;
  tags: string[];
  cover: { src: string; alt: string; bg: string; phone?: boolean };
  /** Internal case study path, or an external link, or nothing yet. */
  href: string | null;
  linkLabel: string;
}

export const projects: ProjectCard[] = [
  {
    slug: 'victual',
    name: 'Victual',
    summary: 'A meal planner that builds your week and a priced grocery list around your budget.',
    status: 'Closed testing',
    tags: ['React Native', 'Spring Boot', 'PostgreSQL', 'Brand + UI'],
    cover: { src: '/images/victual/home.webp', alt: 'Victual home screen', bg: '#1F3326', phone: true },
    href: '/work/victual',
    linkLabel: 'Read the case study',
  },
  {
    slug: 'sofron',
    name: 'Sofron',
    summary: 'Booking and practice management for cash-pay clinics, with clinic and patient portals.',
    status: 'Pre-launch · live demo',
    tags: ['React', 'TypeScript', 'Node + Express', 'PostgreSQL'],
    cover: { src: '/images/sofron/booking-datetime.webp', alt: 'Sofron patient booking flow', bg: '#F7FAFA' },
    href: '/work/sofron',
    linkLabel: 'Read the case study',
  },
];
