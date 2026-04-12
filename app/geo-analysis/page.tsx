// app/geo-analysis/page.tsx
import type { Metadata } from 'next';
import GeoAnalysisClient from './GeoAnalysisClient';

export const metadata: Metadata = {
  title: 'GEO Analytics Tool for LLM Monitoring & AI Optimisation',
  description: 'Improve brand visibility across the AI ecosystem. Monitor citations, analyse sentiment, and outpace competitors in AI responses with real-time insights.',
  openGraph: {
    title: 'GEO Analytics Tool for LLM Monitoring & AI Optimisation',
    description: 'Improve brand visibility across the AI ecosystem. Monitor citations, analyse sentiment, and outpace competitors in AI responses with real-time insights.',
    type: 'website',
    url: 'https://visble.ai/geo-analysis',
  },
};

export default function GeoAnalysisPage() {
  return <GeoAnalysisClient />;
}