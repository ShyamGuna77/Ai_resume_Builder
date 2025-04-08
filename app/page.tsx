import Pricing from "./HeroPage/Pricing";
import Features from "./HeroPage/Feautures";
import HeroSection from "./HeroPage/HeroSection";
import HowItWorks from "./HeroPage/HowItWorks";
import CTASection from "./HeroPage/CtaSection";
import { Footer } from "./HeroPage/Footer";
import Testimonials from "./HeroPage/Testimonals";
export default function Home() {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
}
