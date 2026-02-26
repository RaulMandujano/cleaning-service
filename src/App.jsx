import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import EmergencyBanner from "./components/EmergencyBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles.css";
import config from "./config";

const toCssVarName = (key) =>
  `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;

function App() {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(toCssVarName(key), value);
    });
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <EmergencyBanner />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
