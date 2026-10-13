import {
  Workflow,
  Code2,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  LineChart,
  Factory,
  Landmark,
  HeartPulse,
  Truck,
  Zap,
  ShoppingBag,
  Pickaxe,
  Building2,
} from 'lucide-react'

// `section` links scroll to a section on the home page; others are separate pages
export const navLinks = [
  { label: 'Services', href: '/#services', section: 'services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/#industries', section: 'industries' },
  { label: 'Approach', href: '/#approach', section: 'approach' },
  { label: 'Work', href: '/#work', section: 'work' },
  { label: 'About', href: '/#about', section: 'about' },
]

export const rotatingWords = ['transform', 'modernise', 'scale', 'automate', 'innovate']

export const stats = [
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 18, suffix: '', label: 'Countries served' },
  { value: 98, suffix: '%', label: 'Client retention' },
  { value: 12, suffix: 'yrs', label: 'Engineering heritage' },
]

export const services = [
  {
    icon: Workflow,
    title: 'Digital Transformation',
    description:
      'Strategy-led roadmaps that turn legacy operations into connected, data-driven organisations, from discovery to measurable outcomes.',
    points: ['Digital strategy & roadmaps', 'Process re-engineering', 'Change enablement'],
  },
  {
    icon: Code2,
    title: 'Custom Software Engineering',
    description:
      'Bespoke web, mobile and enterprise platforms engineered for performance, security and long-term maintainability.',
    points: ['Web & mobile platforms', 'Enterprise systems', 'API & integration layers'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Platform Engineering',
    description:
      'Cloud-native architectures, migrations and DevOps pipelines on Azure, AWS and GCP, built to scale with demand.',
    points: ['Cloud migration', 'Kubernetes & serverless', 'CI/CD & platform ops'],
  },
  {
    icon: BrainCircuit,
    title: 'Data & AI',
    description:
      'From modern data platforms to applied machine learning and generative AI that put intelligence into everyday decisions.',
    points: ['Data platforms & lakehouses', 'Applied ML & GenAI', 'Intelligent automation'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Compliance',
    description:
      'Security by design across every layer, aligned to POPIA, GDPR, ISO 27001 and industry-specific regulation.',
    points: ['Secure SDLC', 'Identity & access', 'Compliance readiness'],
  },
  {
    icon: LineChart,
    title: 'Product & Experience Design',
    description:
      'Human-centred product thinking and UX/UI design that turns complex workflows into intuitive experiences.',
    points: ['Product discovery', 'UX research & UI design', 'Design systems'],
  },
]

export const industries = [
  {
    id: 'mining',
    icon: Pickaxe,
    name: 'Mining & Resources',
    headline: 'Safer, smarter, connected operations',
    body: 'IoT telemetry, predictive maintenance and operational dashboards that bring real-time visibility from pit to port.',
    outcomes: ['Predictive asset maintenance', 'Safety & incident platforms', 'Supply-chain visibility'],
  },
  {
    id: 'finance',
    icon: Landmark,
    name: 'Financial Services',
    headline: 'Modern, secure, regulation-ready',
    body: 'Core-system modernisation, digital onboarding and data platforms for banks, insurers and fintechs.',
    outcomes: ['Digital onboarding & KYC', 'Core banking modernisation', 'Fraud & risk analytics'],
  },
  {
    id: 'health',
    icon: HeartPulse,
    name: 'Healthcare',
    headline: 'Connected care, better outcomes',
    body: 'Interoperable clinical platforms, patient portals and analytics that improve care while protecting sensitive data.',
    outcomes: ['Patient engagement portals', 'Clinical data integration', 'Operational analytics'],
  },
  {
    id: 'logistics',
    icon: Truck,
    name: 'Logistics & Transport',
    headline: 'Every shipment, in real time',
    body: 'Fleet, warehouse and routing platforms that cut costs and give customers live visibility.',
    outcomes: ['Fleet & route optimisation', 'Warehouse management', 'Customer tracking portals'],
  },
  {
    id: 'energy',
    icon: Zap,
    name: 'Energy & Utilities',
    headline: 'Powering the energy transition',
    body: 'Grid analytics, smart metering and asset platforms supporting reliable, sustainable energy.',
    outcomes: ['Smart metering platforms', 'Grid & asset analytics', 'ESG reporting'],
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    name: 'Retail & Consumer',
    headline: 'Commerce without friction',
    body: 'Omnichannel commerce, loyalty and personalisation engines that grow customer lifetime value.',
    outcomes: ['Omnichannel commerce', 'Loyalty & personalisation', 'Demand forecasting'],
  },
  {
    id: 'industrial',
    icon: Factory,
    name: 'Manufacturing & Industrial',
    headline: 'Industry 4.0, delivered',
    body: 'Digital twins, MES integration and shop-floor apps that lift throughput and quality.',
    outcomes: ['Digital twins', 'MES & ERP integration', 'Quality & yield analytics'],
  },
  {
    id: 'public',
    icon: Building2,
    name: 'Public Sector',
    headline: 'Citizen services that just work',
    body: 'Accessible, secure digital services that make government simpler for citizens and staff.',
    outcomes: ['Citizen service portals', 'Case management', 'Open data platforms'],
  },
]

export const process = [
  {
    step: '01',
    title: 'Discover',
    body: 'We immerse ourselves in your business, users and systems to define the problem worth solving and the value at stake.',
  },
  {
    step: '02',
    title: 'Design',
    body: 'Architecture, experience and delivery plans shaped together with your teams, validated early with prototypes.',
  },
  {
    step: '03',
    title: 'Engineer',
    body: 'Agile, cross-functional squads ship production-grade software in short, transparent increments.',
  },
  {
    step: '04',
    title: 'Evolve',
    body: 'We measure, optimise and scale, transferring knowledge so your organisation keeps moving forward.',
  },
]

export const caseStudies = [
  {
    tag: 'Mining · Southern Africa',
    title: 'Predictive maintenance platform for a multi-site mining operation',
    result: '32%',
    resultLabel: 'reduction in unplanned downtime',
    gradient: 'from-brand-600/40 via-brand-500/5 to-transparent',
  },
  {
    tag: 'Financial Services · Europe',
    title: 'Cloud-native digital onboarding for a retail lender',
    result: '4×',
    resultLabel: 'faster customer onboarding',
    gradient: 'from-gold-500/30 via-gold-600/5 to-transparent',
  },
  {
    tag: 'Logistics · Middle East',
    title: 'Real-time fleet visibility and route optimisation suite',
    result: '18%',
    resultLabel: 'lower fuel and fleet costs',
    gradient: 'from-brand-600/30 via-gold-600/5 to-transparent',
  },
]

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  '.NET',
  'Java',
  'Python',
  'Go',
  'Flutter',
  'Kotlin',
  'Swift',
  'Azure',
  'AWS',
  'Google Cloud',
  'Kubernetes',
  'Terraform',
  'PostgreSQL',
  'Databricks',
  'Snowflake',
  'Power BI',
]

export const testimonials = [
  {
    quote:
      'Baheka took a programme we had stalled on for two years and delivered a working platform in months. They think like owners, not vendors.',
    name: 'Chief Information Officer',
    company: 'Mining & Resources Group',
  },
  {
    quote:
      'Their engineers integrated seamlessly with our teams across three time zones. The quality of the code and the documentation was outstanding.',
    name: 'Head of Engineering',
    company: 'European Fintech',
  },
  {
    quote:
      'From strategy through to delivery, Baheka gave us clarity at every step. Our customers now track shipments live, and our costs are down.',
    name: 'Chief Operating Officer',
    company: 'Regional Logistics Provider',
  },
]

export const values = [
  { title: 'Ubuntu', body: 'We succeed together, with our clients, our people and our communities.' },
  { title: 'Craft', body: 'We engineer software we are proud to put our name on.' },
  { title: 'Ownership', body: 'We treat every outcome as if it were our own business.' },
  { title: 'Curiosity', body: 'We stay restless, learning and bringing new ideas to the table.' },
]
