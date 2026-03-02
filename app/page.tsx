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
import ClientLogos from "@/components/ClientLogos";
import CaseStudies from "@/components/CaseStudies";
import AEOStrategySection from "@/components/AEOStrategySection";
import FeatureChecklist from "@/components/FeatureChecklist";
import WorkingSnippets from "@/components/WorkingSnippets";
import StatsCarousel from "@/components/StatsCarousel";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import SeoCtaSection from "@/components/SeoCtaSection";
import OptimizedVideo from "@/components/OptimizedVideo";
import VideoSection from "@/components/VideoSection";
import VideoTestimonials from "@/components/VideoTestimonials";

export const metadata: Metadata = {
  metadataBase: new URL("https://visble.ai"),

  title: "Best Generative Engine Optimization Company - Visble AI",

  description:
    "We are a tech-enabled LLM SEO agency with integrated SEO. Our clients have achieved from zero to 1000+ source mentions and a $100k+ revenue pipeline through AI Search.",

  alternates: {
    canonical: "https://visble.ai/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visble.ai/",
    siteName: "Visble AI",
    title: "Best Generative Engine Optimization Company - Visble AI",
    description:
      "We are a tech-enabled LLM SEO agency with integrated SEO. Our clients have achieved from zero to 1000+ source mentions and a $100k+ revenue pipeline through AI Search.",
    images: [
      {
        url: "https://visble.ai/visble_og_image.png",
        width: 1200,
        height: 630,
        alt: "Visble AI Dashboard Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Generative Engine Optimization Company - Visble AI",
    description:
      "We are a tech-enabled LLM SEO agency with integrated SEO. Our clients have achieved from zero to 1000+ source mentions and a $100k+ revenue pipeline through AI Search.",
    images: ["https://visble.ai/visble_og_image.png"],
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://visble.ai/#organization",
        name: "Visble AI",
        url: "https://visble.ai/",
        logo: {
          "@type": "ImageObject",
          url: "https://visble.ai/visble_logo.png",
          width: 512,
          height: 512,
        },
        description:
          "We are a tech-enabled LLM SEO agency with integrated SEO. Our clients have achieved from zero to 1000+ source mentions and a $100k+ revenue pipeline through AI Search.",
        sameAs: [
          "https://x.com/visbleai",
          "https://www.linkedin.com/company/visble-ai",
        ],
        knowsAbout: [
          "Generative Engine Optimization",
          "AI Search Optimization",
          "LLM SEO",
          "ChatGPT Optimization",
          "Perplexity SEO",
          "Google Gemini Optimization",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://visble.ai/#software",
        name: "Visble AI",
        url: "https://visble.ai/",
        applicationCategory: "SEO Software",
        operatingSystem: "Web",
        publisher: {
          "@id": "https://visble.ai/#organization",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <Hero />
        {/* <OptimizedVideo videoId="visble_overview" title="Visble AI — Product Overview" /> */}
        <Banner />
        <StatsCarousel />
        <CaseStudies />
        <SeoCtaSection/>
        <AEOStrategySection />
        <FeatureChecklist />
        <WorkingSnippets />
        <VideoSection />
        {/* <VideoTestimonials/> */}
        <ClientLogos />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
