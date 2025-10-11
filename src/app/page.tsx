
import CTA from "@/components/ui/landing/CTA";
import Header from "@/components/ui/landing/header";
import Hero from "@/components/ui/landing/Hero";
import HowItWorks from "@/components/ui/landing/HowItWorks";
import PricingSection from "@/components/ui/landing/PricingSection";
import WhatToAsk from "@/components/ui/landing/WhatToAsk";
import { Footer } from "react-day-picker";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <Hero/>
      <HowItWorks/>
      <WhatToAsk/>
      <PricingSection/>
      <CTA/>
      <Footer/>

    </div>
  );
}
