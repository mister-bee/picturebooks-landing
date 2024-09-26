// app/page.tsx
import React from "react";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ValueProposition from "./components/ValueProposition";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import VideoSection from "./components/VideoSection"; // Add this line
import AdditionalBenefits from "./components/AdditionalBenefits";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ValueProposition />
      <Features />
      <Testimonials />
      <HowItWorks />
      <VideoSection /> {/* Add this line */}
      <AdditionalBenefits />
      <Resources />
      <Footer />
    </>
  );
}
