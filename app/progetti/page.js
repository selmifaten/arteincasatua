"use client";
import AOS from "aos";
import { useEffect } from "react";
import { useRef } from "react";
import Header from "../components/header/Header";
import OurProjects from "../components/ourProjects/OurProjects";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

export default function ChiSiamo() {
  const preloaderRef = useRef(null);
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
      preloaderRef.current.remove();

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  return (
    <div>
      <Header parent={"Progetti"} />
      <main className="main">
        <Breadcrumbs parent={"Progetti"} />
        <OurProjects parent={"Progetti"} />
        <Testimonials />
      </main>
      <Footer />
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader" ref={preloaderRef}></div>
    </div>
  );
}
