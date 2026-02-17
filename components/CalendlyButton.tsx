// 'use client';

// import { Play } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// let calendlyLoaded = false;

// export default function CalendlyButton() {
//   const openCalendly = async () => {
//     if (!calendlyLoaded) {
//       await loadCalendlyAssets();
//       calendlyLoaded = true;
//     }

//     // @ts-ignore
//     window.Calendly.initPopupWidget({
//       url: 'https://calendly.com/isha-visble/30min-1',
//     });
//   };

//   return (
//     <Button
//       size="lg"
//       className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
//       onClick={openCalendly}
//     >
//       <Play className="w-5 h-5 mr-2" />
//       Book a Demo
//     </Button>
//   );
// }

// /* ---------- helpers ---------- */

// function loadCalendlyAssets(): Promise<void> {
//   return new Promise((resolve, reject) => {
//     // Load CSS
//     if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
//       const link = document.createElement('link');
//       link.rel = 'stylesheet';
//       link.href = 'https://assets.calendly.com/assets/external/widget.css';
//       document.head.appendChild(link);
//     }

//     // Load JS
//     if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
//       resolve();
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;

//     script.onload = () => resolve();
//     script.onerror = () => reject(new Error('Calendly failed to load'));

//     document.body.appendChild(script);
//   });
// }

// 'use client';

// import { Play, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useState } from 'react';

// let calendlyLoaded = false;

// interface CalendlyButtonProps {
//   variant?: 'default' | 'cta' | 'case-study' | 'demo' | 'blog';
// }

// export default function CalendlyButton({ variant = 'default' }: CalendlyButtonProps) {
//   const [isLoading, setIsLoading] = useState(false);

//   const openCalendly = async () => {
//     try {
//       if (!calendlyLoaded) {
//         setIsLoading(true);
//         await loadCalendlyAssets();
//         calendlyLoaded = true;
//       }

//       // @ts-ignore
//       if (window.Calendly) {
//         window.Calendly.initPopupWidget({
//           url: 'https://calendly.com/isha-visble/30min-1',
//         });
//       }
//     } catch (error) {
//       console.error('Failed to load Calendly:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Blog variant (for blog post CTA)
//   if (variant === 'blog') {
//     return (
//       <button
//         onClick={openCalendly}
//         disabled={isLoading}
//         className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {isLoading ? 'Loading...' : 'Get Started Free'}
//       </button>
//     );
//   }

//   // Demo variant (Book a Demo)
//   if (variant === 'demo') {
//     return (
//       <Button
//         size="lg"
//         className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
//         onClick={openCalendly}
//         disabled={isLoading}
//       >
//         <Play className="w-5 h-5 mr-2" />
//         {isLoading ? 'Loading...' : 'Book a Demo'}
//       </Button>
//     );
//   }

//   // CTA variant (for case studies list page)
//   if (variant === 'cta') {
//     return (
//       <button
//         onClick={openCalendly}
//         disabled={isLoading}
//         className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {isLoading ? 'Loading...' : 'Get Started Today'}
//         <ArrowRight className="w-5 h-5" />
//       </button>
//     );
//   }

//   // Case study variant (for individual case study page)
//   if (variant === 'case-study') {
//     return (
//       <Button
//         size="lg"
//         onClick={openCalendly}
//         disabled={isLoading}
//         className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
//       >
//         {isLoading ? 'Loading...' : 'Get Started Today'}
//       </Button>
//     );
//   }

//   // Default variant (hero section - same as demo)
//   return (
//     <Button
//       size="lg"
//       className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
//       onClick={openCalendly}
//       disabled={isLoading}
//     >
//       <Play className="w-5 h-5 mr-2" />
//       {isLoading ? 'Loading...' : 'Book a Demo'}
//     </Button>
//   );
// }

// /* ---------- helpers ---------- */

// function loadCalendlyAssets(): Promise<void> {
//   return new Promise((resolve, reject) => {
//     // Load CSS
//     if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
//       const link = document.createElement('link');
//       link.rel = 'stylesheet';
//       link.href = 'https://assets.calendly.com/assets/external/widget.css';
//       document.head.appendChild(link);
//     }

//     // Load JS
//     const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
//     if (existingScript) {
//       resolve();
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;

//     script.onload = () => resolve();
//     script.onerror = () => reject(new Error('Calendly failed to load'));

//     document.body.appendChild(script);
//   });
// }

'use client';

import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';

let loadPromise: Promise<void> | null = null;

if (typeof window !== 'undefined') {
  prependLink({ rel: 'preconnect',   href: 'https://assets.calendly.com', crossOrigin: 'anonymous' });
  prependLink({ rel: 'dns-prefetch', href: 'https://assets.calendly.com' });

  appendLink({
    rel:  'preload',
    href: 'https://assets.calendly.com/assets/external/widget.css',
    as:   'style',
  });

  const kick = () => { loadCalendly(); };
  'requestIdleCallback' in window
    ? requestIdleCallback(kick, { timeout: 1500 })
    : setTimeout(kick, 0);
}
function loadCalendly(): Promise<void> {
  if (loadPromise) return loadPromise;

  loadPromise = new Promise<void>((resolve, reject) => {
    // Swap preload → real stylesheet
    if (!document.querySelector('link[rel="stylesheet"][href*="calendly.com"]')) {
      appendLink({
        rel:  'stylesheet',
        href: 'https://assets.calendly.com/assets/external/widget.css',
      });
    }

    if (window.Calendly) { resolve(); return; }

    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      waitForCalendly(resolve, reject);
      return;
    }

    const script = document.createElement('script');
    script.src   = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload  = () => resolve();
    script.onerror = () => { loadPromise = null; reject(new Error('Calendly failed')); };
    document.head.appendChild(script); // head > body: parsed sooner
  });

  return loadPromise;
}

function waitForCalendly(resolve: () => void, reject: (e: Error) => void) {
  const deadline = Date.now() + 10_000;
  const id = setInterval(() => {
    if (window.Calendly)           { clearInterval(id); resolve(); }
    else if (Date.now() > deadline) { clearInterval(id); reject(new Error('Calendly timeout')); }
  }, 50);
}

function openPopup(url: string) {
  window.Calendly?.initPopupWidget({ url });
}

function prependLink(attrs: Record<string, string>) {
  if (document.querySelector(`link[rel="${attrs.rel}"][href="${attrs.href}"]`)) return;
  const el = Object.assign(document.createElement('link'), attrs);
  document.head.prepend(el);
}

function appendLink(attrs: Record<string, string>) {
  if (document.querySelector(`link[href="${attrs.href}"][rel="${attrs.rel}"]`)) return;
  const el = Object.assign(document.createElement('link'), attrs);
  document.head.appendChild(el);
}

const CALENDLY_URL = 'https://calendly.com/isha-visble/30min-1';

interface CalendlyButtonProps {
  variant?: 'default' | 'cta' | 'case-study' | 'demo' | 'blog';
}

export default function CalendlyButton({ variant = 'default' }: CalendlyButtonProps) {
  // useCallback so the function reference is stable across re-renders
  const open = useCallback(async () => {
    try {
      await loadCalendly();
      openPopup(CALENDLY_URL);
    } catch (err) {
      console.error('Calendly could not open:', err);
    }
  }, []);


  if (variant === 'blog') {
    return (
      <button
        onClick={open}
        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
      >
        Get Started Free
      </button>
    );
  }

  if (variant === 'demo') {
    return (
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
        onClick={open}
      >
        <Play className="w-5 h-5 mr-2" />
        Book a Demo
      </Button>
    );
  }

  if (variant === 'cta') {
    return (
      <button
        onClick={open}
        className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
      >
        Get Started Today
        <ArrowRight className="w-5 h-5" />
      </button>
    );
  }

  if (variant === 'case-study') {
    return (
      <Button
        size="lg"
        onClick={open}
        className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
      >
        Get Started Today
      </Button>
    );
  }

  // Default / hero
  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
      onClick={open}
    >
      <Play className="w-5 h-5 mr-2" />
      Book a Demo
    </Button>
  );
}