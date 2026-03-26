import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://nurfajar.com${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-8 font-mono text-xs text-pf-text-faint"
      >
        {items.map((item, i) => (
          <span key={item.label}>
            {i > 0 && <span className="mx-1.5">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-pf-accent"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-pf-text-muted">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
