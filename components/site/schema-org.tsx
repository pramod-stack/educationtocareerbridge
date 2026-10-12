import React from 'react'

export function SchemaOrg() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.educationtocareerbridge.com/#organization',
        name: 'Education Bridge',
        alternateName: 'Education to Career Bridge',
        url: 'https://www.educationtocareerbridge.com',
        logo: 'https://www.educationtocareerbridge.com/images/education-bridge-mark.png',
        image: 'https://www.educationtocareerbridge.com/images/education-bridge-logo.png',
        description:
          'India’s premier career architecture and educational guidance firm. We guide students from Class 10 assessment to degree, college selection, scholarships, and placement support.',
        telephone: '+91-7795354043',
        email: 'mentors@educationtocareerbridge.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '2300',
          bestRating: '5',
          worstRating: '1',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Career & Education Guidance Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Psychometric Career Counselling',
                description: 'Scientific assessment of aptitude, personality, and career alignment for Class 10 & 12 students.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Honest College Comparison & ROI Audit',
                description: 'Campus-verified audit of engineering, medical, management, and design colleges.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Admission Quota & Scholarship Support',
                description: 'End-to-end guidance for KCET, COMEDK, NEET, JEE, CUET counselling and institutional scholarships.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '4-Year College to Placement Mentorship',
                description: 'Continuous semester-by-semester milestone planning, resume audits, and corporate interview prep.',
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
