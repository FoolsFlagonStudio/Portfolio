export interface Service {
  id: string;
  title: string;
  short: string;
  long: string;
  deliverables: string[];
  proof: { label: string; to: string } | null;
}

export const services: Service[] = [
  {
    id: 'apps',
    title: 'Web apps & SaaS',
    short: 'Full-stack products, from the database schema to the deploy.',
    long: 'Booking systems, dashboards, internal tools and customer-facing apps. I handle the data model, the API, the interface and getting it live.',
    deliverables: ['Database + API design', 'React frontends', 'Auth, roles + payments', 'Hosting + deploys'],
    proof: { label: 'See Sofron', to: '/work/sofron' },
  },
  {
    id: 'mobile',
    title: 'Mobile apps',
    short: 'iOS and Android apps built once with React Native.',
    long: 'One codebase for both stores, a backend it can rely on, and store-ready builds.',
    deliverables: ['Expo + React Native', 'Backend + API', 'App store builds', 'Design system shared with the web'],
    proof: { label: 'See Victual', to: '/work/victual' },
  },
  {
    id: 'automation',
    title: 'Automation & data tools',
    short: 'Scripts and integrations that take busywork off your plate.',
    long: 'Spreadsheet systems, data pipelines, scrapers and dashboards that turn hours of manual work into a button.',
    deliverables: ['Google Sheets + Apps Script', 'Python scripts + pipelines', 'API integrations', 'Reports + dashboards'],
    proof: null,
  },
  {
    id: 'brand',
    title: 'Brand & UI design',
    short: 'Logos, design systems and interfaces, from a design degree.',
    long: 'Identity work and product design done in Figma, then carried straight into code so the build matches the design.',
    deliverables: ['Logos + identity', 'Design systems + tokens', 'UI design in Figma', 'Marketing sites'],
    proof: { label: 'See the Victual brand', to: '/work/victual' },
  },
];
