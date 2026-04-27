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

import { Play, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react"

interface BookingButtonProps {
  variant?: 'default' | 'cta' | 'case-study' | 'demo' | 'blog' | 'header' | 'hero'
}

export default function BookingButton({ variant = 'default' }: BookingButtonProps) {

  const openCal = async () => {
    const cal = await getCalApi()

    cal("modal", {
      calLink: "isha-sachdeva/30min"
    })
  }

  useEffect(() => {
    (async () => {
      const cal = await getCalApi()

      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#7c3aed"
          }
        }
      })
    })()
  }, [])

  /* Header button (exact same style as your original header) */
  if (variant === 'header') {
    return (
      <Button
        className="bg-primary hover:bg-primary/90 text-white px-6"
        onClick={openCal}
      >
        Book a Demo
      </Button>
    )
  }

  if (variant === 'blog') {
    return (
      <button
        onClick={openCal}
        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
      >
        Get Started Free
      </button>
    )
  }

  if (variant === 'demo') {
    return (
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
        onClick={openCal}
      >
        <Play className="w-5 h-5 mr-2" />
        Book a Demo
      </Button>
    )
  }

  if (variant === 'cta') {
    return (
      <button
        onClick={openCal}
        className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg"
      >
        Get Started Today
        <ArrowRight className="w-5 h-5" />
      </button>
    )
  }

  if (variant === 'case-study') {
    return (
      <Button
        size="lg"
        onClick={openCal}
        className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
      >
        Get Started Today
      </Button>
    )
  }

  if (variant === 'hero') {
  return (
    <button
      onClick={openCal}
      className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-semibold text-base transition-all border border-white/25 hover:border-white/40 hover:-translate-y-0.5"
    >
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      Book a Call
    </button>
  )
}
  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
      onClick={openCal}
    >
      <Play className="w-5 h-5 mr-2" />
      Book a Demo
    </Button>
  )
}