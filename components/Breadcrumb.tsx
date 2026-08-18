import Link from 'next/link';

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://visble.ai${crumb.href}`,
    })),
  };

  const isLast = (index: number) => index === crumbs.length - 1;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-1">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-1">
              {isLast(index) ? (
                <span className="text-gray-800 font-medium truncate max-w-[260px]" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="hover:text-purple-600 transition-colors whitespace-nowrap"
                  >
                    {crumb.label}
                  </Link>
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
