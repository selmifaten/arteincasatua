"use client";
// Packages:
import AOS from "aos";
import { useRef, useEffect, useState } from "react";

// Components:
import Dashboard from "./dashboard/dashboard";

// Styles:
import "./page.css";
import "./responsive.css";

export default function Admin() {
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
    <main id="admin">
      <main className="main">
        <Dashboard />
      </main>
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </main>
  );
}
