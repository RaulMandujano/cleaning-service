import React from "react";
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

function App() {
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
