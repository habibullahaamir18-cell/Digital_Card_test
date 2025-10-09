import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import WebGLBackground from "./WebGLBackground";
import logo from "../assets/revive-logo.png";
import ibrahim from "../assets/ibrahim.png";
import tablogo from "../assets/tablogo.png";

export default function OurCTO() {
  const [expanded, setExpanded] = useState(false);

  const shortText = `Ibrahim Raza is the Chief Technology Officer at Revive Medical Technologies, leading innovation in medical technology through advanced embedded systems and scalable R&D.`;

  const fullText = `Ibrahim Raza is the Chief Technology Officer at Revive Medical Technologies, driving innovation in medical device engineering, embedded systems, and AI-based solutions. With a strong foundation in hardware design and system architecture, he ensures technological excellence and innovation across all Revive projects.`;

  return (
    <main className="lp">
      <section className="lp-hero">
        <WebGLBackground />
        <div className="lp-shell">
          <div className="lp-hero-grid">
            <div className="lp-hero-media">
              <img src={ibrahim} alt="Ibrahim Raza" className="hero-portrait" />
            </div>
            <div className="lp-hero-copy">
              <img src={logo} alt="Revive Logo" className="lp-brand" />
              <h1>Ibrahim Raza</h1>
              <p className="role">Chief Technology Officer</p>
              <p className="lead">
                {expanded ? fullText : shortText}
                <span onClick={() => setExpanded(!expanded)} className="read-more">
                  {expanded ? "Read Less" : "Read More"}
                </span>
              </p>
              <div className="lp-actions">
                <a className="btn rmt" href="https://rmt-usa.com/" target="_blank" rel="noopener noreferrer">
                  <img src={tablogo} alt="RMT Logo" style={{ width: "20px", height: "20px" }} />
                  RMT
                </a>
                <a className="btn blue" href="https://www.linkedin.com/in/ibrahim-raza" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a className="btn green" href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
