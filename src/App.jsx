import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/revive-logo.png"; // apna screenshot wala logo lagana

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
      <h1>Welcome to Revive</h1>
      <p>Your Digital Business Card</p>

      {/* Buttons */}
      <div className="buttons">
        <a
          href="https://www.rmt-usa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          🌐 Company Website
        </a>
        <a
          href="https://www.linkedin.com/company/example"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          📱 WhatsApp
        </a>
      </div>
    </div>
  );
}
