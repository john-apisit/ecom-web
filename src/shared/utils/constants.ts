// Application constants

export const PROPERTY_TYPES = [
  { value: 'house', label: 'Family House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'villa', label: 'Villa' },
] as const;

export const PROPERTY_STATUS = [
  { value: 'for-sale', label: 'For Sale' },
  { value: 'for-rent', label: 'For Rent' },
] as const;

export const BEDROOM_OPTIONS = Array.from({ length: 10 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1}${i === 0 ? '' : '+'}`,
}));

export const BATHROOM_OPTIONS = Array.from({ length: 10 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1}${i === 0 ? '' : '+'}`,
}));

export const AMENITIES = [
  'Air Conditioning',
  'Swimming Pool',
  'Central Heating',
  'Laundry Room',
  'Gym',
  'Alarm',
  'Window Covering',
  'WiFi',
  'TV Cable',
  'Dryer',
  'Microwave',
  'Washer',
  'Refrigerator',
  'Outdoor Shower',
] as const;

export const CITIES = [
  'Los Angeles',
  'Chicago',
  'Philadelphia',
  'San Francisco',
  'Miami',
  'Houston',
  'New York',
  'Boston',
  'Seattle',
  'Denver',
] as const;

export const PRICE_RANGES = [
  { min: 0, max: 100000, label: 'Under $100K' },
  { min: 100000, max: 250000, label: '$100K - $250K' },
  { min: 250000, max: 500000, label: '$250K - $500K' },
  { min: 500000, max: 750000, label: '$500K - $750K' },
  { min: 750000, max: 1000000, label: '$750K - $1M' },
  { min: 1000000, max: Infinity, label: 'Over $1M' },
] as const;

export const AREA_RANGES = [
  { min: 0, max: 500, label: 'Under 500 sq ft' },
  { min: 500, max: 1000, label: '500 - 1000 sq ft' },
  { min: 1000, max: 1500, label: '1000 - 1500 sq ft' },
  { min: 1500, max: 2000, label: '1500 - 2000 sq ft' },
  { min: 2000, max: 3000, label: '2000 - 3000 sq ft' },
  { min: 3000, max: Infinity, label: 'Over 3000 sq ft' },
] as const;

export const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Home Map', href: '/home-map' },
      { label: 'Home Image', href: '/home-image' },
      { label: 'Home Video', href: '/home-video' },
    ],
  },
  {
    label: 'Properties',
    href: '/properties',
    children: [
      { label: 'Grid View', href: '/properties/grid' },
      { label: 'List View', href: '/properties/list' },
      { label: 'Map View', href: '/properties/map' },
    ],
  },
  {
    label: 'Agents',
    href: '/agents',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const;

export const FOOTER_LINKS = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Agents', href: '/agents' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/agents' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Support', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Documentation', href: '/docs' },
  ],
} as const;
