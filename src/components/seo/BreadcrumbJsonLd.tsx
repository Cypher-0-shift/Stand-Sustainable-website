import React from 'react';

type BreadcrumbJsonLdProps = {
  items: { name: string; url: string }[];
};

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const fullItems = [
    { name: 'Home', url: '/' },
    ...items
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://standsustainable.org${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
