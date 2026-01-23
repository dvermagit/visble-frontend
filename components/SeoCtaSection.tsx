import InlineCalendly from '@/components/InlineCalendly';

export default function SeoCtaSection() {
  return (
    <section
      aria-labelledby="cta-geo-audit-heading"
      className="mt-16 pt-8 border-t border-gray-200"
    >
      <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 p-10 shadow-sm border border-purple-100">

        <InlineCalendly />

      </div>
    </section>
  );
}
