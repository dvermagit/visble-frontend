'use client';

import { useEffect, useState } from 'react';

export default function InlineCalendly() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const loadCalendlyAssets = () => {
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // JS
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  };

  const openCalendly = () => {
    setOpen(true);
    loadCalendlyAssets();
  };

  useEffect(() => {
    if (!open || !isMobile) return;

    const interval = setInterval(() => {
      // @ts-ignore
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/isha-visble/30min-1',
          text: 'Schedule time with us',
          color: '#7c3bed',
          textColor: '#ffffff',
          branding: true,
        });
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [open, isMobile]);

  return (
    <>
      {/* INITIAL CTA */}
      {!open && (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to boost your AI visibility?
          </h2>

          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Get a detailed GEO audit across AI platforms like ChatGPT,
            Perplexity, and Gemini.
          </p>

          <button
            onClick={openCalendly}
            className="rounded-xl bg-purple-600 px-10 py-4 text-lg font-semibold text-white shadow-md hover:bg-purple-700 transition"
          >
            Get your GEO Audit
          </button>
        </div>
      )}

      {/* DESKTOP INLINE CALENDAR */}
      {open && !isMobile && (
        <div className="mt-10">
          <div className="relative mb-6 h-12">
            <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
              Want to learn more?{" "}
              <span className="text-purple-600">
                Schedule time with our team
              </span>
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="absolute right-0 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
          </div>

          <div
            className="calendly-inline-widget rounded-xl overflow-hidden shadow-lg bg-white"
            data-url="https://calendly.com/isha-visble/30min-1?hide_event_type_details=1"
            style={{ height: '720px' }}
          />
        </div>
      )}

      {/* MOBILE HELPER TEXT */}
      {open && isMobile && (
        <div className="mt-6 text-center text-sm text-gray-600">
          Look for the{' '}
          <span className="font-medium text-purple-600">
            purple “Schedule time with us”
          </span>{' '}
          button on your screen
        </div>
      )}
    </>
  );
}
