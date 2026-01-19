import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import AIPlatforms from "@/components/AIPlatforms";
import ClientLogos from "@/components/ClientLogos";
import CaseStudies from "@/components/CaseStudies";
import ProductFeatures from "@/components/ProductFeatures";
import FeaturesList from "@/components/FeaturesList";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AEOStrategySection from "@/components/AEOStrategySection";
import FeatureChecklist from "@/components/FeatureChecklist";
import WorkingSnippets from "@/components/WorkingSnippets";
import StatsCarousel from "@/components/StatsCarousel";
import FAQSection from "@/components/FaqSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Home - AI Search Optimization Platform',
  description: 'Visble.ai helps you optimize your website for AI search engines like ChatGPT, Perplexity, and Gemini. Track brand mentions, source citations, and AI visibility.',
  alternates: {
    canonical: 'https://visble.ai',
  },
  openGraph: {
    title: 'Visble.ai - AI Search Optimization Platform',
    description: 'Optimize your website for AI search engines',
    url: 'https://visble.ai',
    type: 'website',
  },
};
export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Visble.ai',
    url: 'https://visble.ai',
    description: 'AI Search Optimization Platform',
  };

  return (
    <main className="min-h-screen ">
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <Hero />
      <Banner />
      <StatsCarousel/>
      <CaseStudies />
      <AEOStrategySection />
      <FeatureChecklist />
      <WorkingSnippets/>
      {/* <AIPlatforms /> */}
      <ClientLogos />
      {/* <VideoTestimonials/> */}
      {/* <ProductFeatures /> */}
      {/* <FeaturesList /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <FAQSection/>
      <Footer />
    </main>
  );
}
