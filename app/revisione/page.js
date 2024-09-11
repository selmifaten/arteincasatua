"use client";
import AOS from "aos";
import { useEffect } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Review from "../components/review/Review";

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
      <Header parent={""} />
      <main className="main">
        <Breadcrumbs parent={"Revisione"} />
        <Review />
      </main>
      <Footer />
    </div>
  );
}
