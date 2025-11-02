import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import AIPlatforms from '@/components/AIPlatforms';
import ClientLogos from '@/components/ClientLogos';
import CaseStudies from '@/components/CaseStudies';
import ProductFeatures from '@/components/ProductFeatures';
import FeaturesList from '@/components/FeaturesList';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    
    <main className="min-h-screen">
  {/* Your Content/Components */}
      <Header />
      <Hero />
      <Banner />
      <AIPlatforms />
      <ClientLogos />
      <CaseStudies />
      <ProductFeatures />
      <FeaturesList />
      <Pricing />
      <Testimonials />
      <Footer />

    </main>
  );
}

