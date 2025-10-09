import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import WebGLBackground from "./WebGLBackground";
import logo from "../assets/revive-logo.png";
import bilal from "../assets/bilal.png";
import tablogo from "../assets/tablogo.png";

export default function OurBDM() {
  const [expanded, setExpanded] = useState(false);

  const shortText = `Bilal Ahmed is the Business Development Manager at Revive Medical Technologies, focused on strategic partnerships, brand growth, and expanding Revive’s global presence.`;

  const fullText = `Bilal Ahmed serves as the Business Development Manager at Revive Medical Technologies. With a strong business acumen and global market insight, he leads initiatives in international partnerships, client relations, and business expansion strategies. His efforts are instrumental in strengthening Revive’s footprint across the healthcare technology landscape.`;

  return (
    <main className="lp">
      <section className="lp-hero">
        <WebGLBackground />
        <div className="lp-shell">
          <div className="lp-hero-grid">
            <div className="lp-hero-media">
              <img src={bilal} alt="Bilal Ahmed" className="hero-portrait" />
            </div>
            <div className="lp-hero-copy">
              <img src={logo} alt="Revive Logo" className="lp-brand" />
              <h1>Bilal Ahmed</h1>
              <p className="role">Business Development Manager</p>
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
                <a className="btn blue" href="https://www.linkedin.com/in/bilal-ahmed" target="_blank" rel="noopener noreferrer">
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
