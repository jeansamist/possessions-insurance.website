export const SITE = {
  name: 'Possessions Insurance',
  tagline: 'There For You',
  phone: '(561) 555-0148',
  phoneHref: 'tel:5615550148',
  email: 'hello@possessionsinsurance.com',
  address: '123 Clematis Street, Suite 400',
  city: 'West Palm Beach, FL 33401',
  license: 'L123456789',
  social: {
    facebook: 'https://facebook.com/possessionsinsurance',
    instagram: 'https://instagram.com/possessionsinsurance',
  },
}

export const NAV_LINKS = [
  { label: 'Coverage', href: '#coverage' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export const CATEGORIES = [
  { id: 'home',     label: 'Home',               icon: 'Home' },
  { id: 'auto',     label: 'Auto',               icon: 'Car' },
  { id: 'health',   label: 'Health',             icon: 'Heart' },
  { id: 'life',     label: 'Life',               icon: 'Shield' },
  { id: 'business', label: 'Business',           icon: 'Briefcase' },
  { id: 'bundle',   label: 'Home + Auto Bundle', icon: 'PackageCheck' },
  { id: 'boat',     label: 'Boat / RV',          icon: 'Anchor' },
  { id: 'notsure',  label: "Not sure yet",       icon: 'HelpCircle' },
]

export const INTENTS = [
  { id: 'lower',  label: 'Lower my premiums',           desc: 'Find the same coverage for less',       icon: 'TrendingDown' },
  { id: 'gaps',   label: 'Check for coverage gaps',     desc: "Make sure I'm fully protected",         icon: 'ShieldCheck' },
  { id: 'switch', label: 'Switch providers',            desc: "I'm ready to make a change",            icon: 'ArrowLeftRight' },
  { id: 'new',    label: 'Get brand new coverage',      desc: "I don't have a policy yet",             icon: 'PlusCircle' },
  { id: 'review', label: 'Just want a second opinion',  desc: 'Check if my current policy is good',    icon: 'Search' },
]

export const PROVIDERS = [
  'State Farm','Allstate','GEICO','Progressive',
  'Citizens','Nationwide','Travelers','Liberty Mutual','Other','None — uninsured',
]

export const TESTIMONIALS = [
  { q: 'Called and spoke to a real person immediately. They explained everything clearly and had my quote ready the same day.', name: 'Maria G.', city: 'West Palm Beach', init: 'MG', av: 'av1' },
  { q: 'We switched from a national provider and ended up saving hundreds while getting better coverage for our home and cars.', name: 'David R.', city: 'Lake Worth', init: 'DR', av: 'av2' },
  { q: 'Finally found an insurance agency that actually feels personal. No pressure, no confusion, just honest help.', name: 'Tanya B.', city: 'Boynton Beach', init: 'TB', av: 'av3' },
]

export const BLOG_POSTS = [
  {
    slug: 'florida-homeowners-insurance-guide',
    category: 'Home Insurance',
    title: 'Why Florida Homeowners Pay More — And How to Fight Back',
    excerpt: 'Florida leads the nation in homeowners insurance costs. Here\'s what\'s driving rates up and the practical steps you can take right now.',
    readTime: '5 min read',
    date: 'May 2, 2026',
    badge: 'Most Popular',
  },
  {
    slug: 'coverage-gaps-checklist',
    category: 'Coverage Tips',
    title: '7 Hidden Coverage Gaps Most South Florida Families Don\'t Know They Have',
    excerpt: 'Most people assume their policy covers everything. Most are wrong. This checklist could save you thousands.',
    readTime: '4 min read',
    date: 'Apr 18, 2026',
    badge: '',
  },
  {
    slug: 'bundling-home-auto-save',
    category: 'Savings',
    title: 'Bundling Home and Auto: Is It Always the Best Deal?',
    excerpt: 'Bundling sounds like a no-brainer, but the math isn\'t always obvious. We break down when it saves and when it doesn\'t.',
    readTime: '6 min read',
    date: 'Apr 5, 2026',
    badge: 'New',
  },
]
