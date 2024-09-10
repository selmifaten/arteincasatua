"use client";
import AOS from "aos";
import { useEffect } from "react";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import GetStarted from "./components/getStarted/GetStarted";
import Services from "./components/services/Services";
import Features from "./components/features/Features";
import OurProjects from "./components/ourProjects/OurProjects";
import Testimonials from "./components/testimonials/Testimonials";
import AltServices from "./components/altServices/AltServices";
import Footer from "./components/footer/Footer";

export default function Home() {
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  useEffect(() => {
    aos_init();
    if (typeof window !== "undefined") {
      // Dynamically load the Bootstrap JS only on the client side
      const script = document.createElement("script");
      script.src = "/vendor/bootstrap/js/bootstrap.bundle.min.js";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup script when component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  return (
    <div>
      <Header parent={"Home"} />
      <Hero />
      <main className="main">
        <GetStarted />
        <Services />
        <Features />
        <OurProjects parent={"Home"} />
        <Testimonials />
        <AltServices />
      </main>
      <Footer />
    </div>
  );
}
