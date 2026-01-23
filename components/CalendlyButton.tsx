'use client';

import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

let calendlyLoaded = false;

export default function CalendlyButton() {
  const openCalendly = async () => {
    if (!calendlyLoaded) {
      await loadCalendlyAssets();
      calendlyLoaded = true;
    }

    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/isha-visble/30min-1',
    });
  };

  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
      onClick={openCalendly}
    >
      <Play className="w-5 h-5 mr-2" />
      Book a Demo
    </Button>
  );
}

/* ---------- helpers ---------- */

function loadCalendlyAssets(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Load CSS
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Load JS
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Calendly failed to load'));

    document.body.appendChild(script);
  });
}
