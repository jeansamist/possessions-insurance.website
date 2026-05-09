export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Possessions Insurance',
    description: 'Local independent insurance agency serving West Palm Beach and South Florida. Home, auto, health, and business coverage.',
    url: 'https://possessionsinsurance.com',
    telephone: '+15615550148',
    email: 'hello@possessionsinsurance.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Clematis Street, Suite 400',
      addressLocality: 'West Palm Beach',
      addressRegion: 'FL',
      postalCode: '33401',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.7153,
      longitude: -80.0534,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
    ],
    areaServed: ['West Palm Beach', 'Lake Worth', 'Boynton Beach', 'Boca Raton', 'Palm Beach County'],
    sameAs: [
      'https://facebook.com/possessionsinsurance',
      'https://instagram.com/possessionsinsurance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Products',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Insurance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Insurance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Health Insurance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Insurance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Life Insurance' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
