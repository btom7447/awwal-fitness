import HeroSection from "@/components/HeroSection";
import LandingPage from "../components/LandingPage";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import PricingPlanSection from "@/components/PricingPlanSection";
import TestimonialSecton from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TestimonialSecton />
      <PricingPlanSection />
      <ContactSection />
    </div>
  );
}
