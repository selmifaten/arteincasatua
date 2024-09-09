"use client";
import AOS from "aos";
import { useEffect } from "react";

import Header from "../components/header/Header";
import GetStarted from "../components/getStarted/GetStarted";
import Services from "../components/services/Services";
import Features from "../components/features/Features";
import OurProjects from "../components/ourProjects/OurProjects";
import Testimonials from "../components/testimonials/Testimonials";
import AltServices from "../components/altServices/AltServices";
import Footer from "../components/footer/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import AboutSection from "../components/aboutSection/AboutSection";
import StatsCounter from "../components/statsCounter/StatsCounter";
import ServiceCards from "../components/serviceCards/ServiceCards";

export default function ChiSiamo() {
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
      const script = document.createElement("script");
      script.src = "/vendor/bootstrap/js/bootstrap.bundle.min.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  return (
    <div>
      <Header parent={"Servizi"} />
      <main className="main">
        <Breadcrumbs parent={"Servizi"}/>
        <Services />
        <ServiceCards />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
