"use client";
// Packages:

// Components:
import Login from "./login";

// Styles:
import "./page.css";
import "./responsive.css";

export default function Home() {
  return (
    <main id="home">
      <div className="toast-overlay" id="toast-overlay"></div>
      <div id="toast" className="toast" />
      <Login />
    </main>
  );
}
