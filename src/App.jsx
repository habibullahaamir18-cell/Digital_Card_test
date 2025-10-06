import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/revive-logo.png";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Logo" />
      </div>
    );
  }

  return (
    <div className="container">
      {/* Logo */}
      <img src={logo} alt="Company Logo" className="logo" />

      {/* Text */}
      <h1>DR Murtaza Najabat Ali</h1>
      <p></p>

      {/* Buttons */}
      <div className="buttons">
        <a
          href="https://www.rmt-usa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-website"
        >
          🌐 Company Website
        </a>

        <a
          href="https://www.linkedin.com/in/prof-dr-murtaza-najabat-ali-ceng-uk-fimeche-pe-55a4469/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-linkedin"
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>

        <a
          href="https://wa.me/923348558828"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <FaWhatsapp className="icon" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
