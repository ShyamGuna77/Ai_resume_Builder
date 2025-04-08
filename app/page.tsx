import Pricing from "./HeroPage/Pricing";
import Features from "./HeroPage/Feautures";
import HeroSection from "./HeroPage/HeroSection";
export default function Home() {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <HeroSection />
      <Features />
      <Pricing />
    </div>
  );
}
