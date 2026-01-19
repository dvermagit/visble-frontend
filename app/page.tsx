// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import Banner from "@/components/Banner";
// import AIPlatforms from "@/components/AIPlatforms";
// import ClientLogos from "@/components/ClientLogos";
// import CaseStudies from "@/components/CaseStudies";
// import ProductFeatures from "@/components/ProductFeatures";
// import FeaturesList from "@/components/FeaturesList";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Footer from "@/components/Footer";
// import AEOStrategySection from "@/components/AEOStrategySection";
// import FeatureChecklist from "@/components/FeatureChecklist";
// import WorkingSnippets from "@/components/WorkingSnippets";
// import StatsCarousel from "@/components/StatsCarousel";
// import FAQSection from "@/components/FaqSection";
// import VideoTestimonials from "@/components/VideoTestimonials";
// import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: 'Home - AI Search Optimization Platform',
//   description: 'Visble.ai helps you optimize your website for AI search engines like ChatGPT, Perplexity, and Gemini. Track brand mentions, source citations, and AI visibility.',
//   alternates: {
//     canonical: 'https://visble.ai',
//   },
//   openGraph: {
//     title: 'Visble.ai - AI Search Optimization Platform',
//     description: 'Optimize your website for AI search engines',
//     url: 'https://visble.ai',
//     type: 'website',
//   },
// };
// export default function Home() {
//   const websiteSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'WebSite',
//     name: 'Visble.ai',
//     url: 'https://visble.ai',
//     description: 'AI Search Optimization Platform',
//   };

//   return (
//     <main className="min-h-screen ">
//       {/* WebSite Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
//       />
//       <Header />
//       <Hero />
//       <Banner />
//       <StatsCarousel/>
//       <CaseStudies />
//       <AEOStrategySection />
//       <FeatureChecklist />
//       <WorkingSnippets/>
//       {/* <AIPlatforms /> */}
//       <ClientLogos />
//       {/* <VideoTestimonials/> */}
//       {/* <ProductFeatures /> */}
//       {/* <FeaturesList /> */}
//       {/* <Pricing /> */}
//       {/* <Testimonials /> */}
//       <FAQSection/>
//       <Footer />
//     </main>
//   );
// }

import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: 'Best Generative Engine Optimization Company - Visble AI',
  
  description: 'We are a tech-enabled LLM SEO agency with integrated SEO. Our clients have achieved from zero to 1000+ source mentions and a $100k+ revenue pipeline through AI Search',
  
  alternates: {
    canonical: 'https://visble.ai',
  },
  
  keywords: [
    'Generative engine optimization agency', 
    'Generative engine optimization services', 
    'generative engine optimization companies', 
    'Optimize for ChatGPT', 
    'LLM seo agency', 
  ],

  openGraph: {
    title: 'Visble.ai - The #1 AI Search Optimization Platform',
    description: 'Stop losing traffic to AI. Optimize your website for ChatGPT, Perplexity, and Gemini today.',
    url: 'https://visble.ai',
    siteName: 'Visble.ai',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/visble_og_image.png', // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: 'Visble.ai Dashboard Preview',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Visble.ai | AI Search Optimization',
    description: 'Optimize for ChatGPT, Perplexity, and Gemini.',
    images: ['/visble_og_image.png'],
  },
};

export default function Home() {
  // ENHANCED SCHEMA: Includes Sitelinks Search Box capability
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Visble.ai',
    url: 'https://visble.ai',
    description: 'The Leading Generative Engine Optimization Company',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://visble.ai/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Visble.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://visble.ai/visble_logo.png'
      }
    }
  };

  return (
    <>
      {/* 
         NOTE: If 'Header' is already in your layout.tsx, remove it here 
         to avoid duplicate headers. If not, keep it.
      */}
      <Header />

      <main className="min-h-screen bg-white">
        {/* JSON-LD Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        <Hero />
        <Banner />
        <StatsCarousel/>
        <CaseStudies />
        <AEOStrategySection />
        <FeatureChecklist />
        <WorkingSnippets/>
        
        {/* Uncomment sections as needed */}
        {/* <AIPlatforms /> */}
        
        <ClientLogos />
        
        {/* <VideoTestimonials/> */}
        {/* <ProductFeatures /> */}
        {/* <FeaturesList /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        
        <FAQSection/>
      </main>

      {/* Footer should be outside main for semantic HTML */}
      <Footer />
    </>
  );
}