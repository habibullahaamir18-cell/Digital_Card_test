import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp, FaGlobe } from "react-icons/fa";
import WebGLBackground from "./WebGLBackground";
import logo from "../assets/revive-logo.png";
import ceo from "../assets/ceo.png";

export default function OurCEO() {
  const [expanded, setExpanded] = useState(false);

  const shortText = `Prof. Dr. Murtaza Najabat Ali is a biomedical engineer by profession and the visionary CEO of Revive Medical Technologies Inc., while also serving as Professor and Head of the Biomedical Engineering Department at Riphah International University, Islamabad.`;

  const fullText = `Prof. Dr. Murtaza Najabat Ali is a biomedical engineer by profession and the visionary CEO of Revive Medical Technologies Inc., while also serving as Professor and Head of the Biomedical Engineering Department at Riphah International University, Islamabad.
After completing his Ph.D. and postdoctoral research at the University of Sheffield, UK, he returned to Pakistan with a mission to establish the country's first medical device industry. His groundbreaking journey began with the support from Pakistan's Ministry of Science and Technology, he set up a pilot-scale production plant in federal government in 2007 by the support from Ministry of S&T of Pakistan, marking the nation's entry into indigenous cardiovascular device manufacturing. He and his core team acquired specialized training in a German medical device industry related to the production of cardiovascular stents and catheters.
He is the recipient of Prime Minister’s office mandate which was given to him to establish Pakistan’s first state-owned Medical device industry. As a result, Dr. Najabat founded Novative Health Technologies (NHT), Pakistan's first state-owned ISO 13485-certified and DRAP-licensed medical device industry. As the founding Executive Director of the Medical Devices Development Centre (MDDC) at NUST University and CEO of NHTPL, he successfully developed and produced four commercially available cardiovascular products - Rejuvenate, VasoGlide, N-DEavour, and Tracker - all DRAP-approved and priced at just one-fourth the cost of imported alternatives. During the COVID-19 pandemic, he expanded production capabilities to manufacture Pakistan's first indigenous ventilators and respiratory devices, while also achieving the remarkable feat of localizing production of specialized medical manufacturing equipment previously imported from Germany and the United States.
Throughout his distinguished career spanning over two decades, Dr. Najabat has made significant contributions to academia as the founder of the Biomedical Engineering & Sciences Department at NUST, where he established the Prosthetics and Implantology Lab and facilitated numerous technology transfers to industry. His exceptional work has been recognized with Pakistan's most prestigious honors, including the National Development Award, Presidential Award, and the Pakistan Engineering Council's Excellence Award, along with COMSTECH's Distinguished Scholar Award for his capacity-building efforts across OIC member countries. With over 50 peer-reviewed publications and 27 patents to his credit, Dr. Najabat has secured significant research funding.
In 2023, Dr. Najabat co-founded Revive Medical Technologies Inc. (RMT), a U.S.-based company that addresses critical gaps in medical device development by offering comprehensive, end-to-end solutions under one roof. Backed by a board of U.S.-based physicians and industry experts, RMT embodies Dr. Najabat's lifelong commitment to transforming innovative concepts into market-ready medical technologies.`;

  return (
    <main className="lp">
      <section className="lp-hero">
        <WebGLBackground />
        <div className="lp-shell">
          <div className="lp-hero-grid">

            {/* Left: CEO Image */}
            <div className="lp-hero-media">
              <img src={ceo} alt="Dr. Murtaza Najabat Ali" className="hero-portrait" />
            </div>

            {/* Right: Text Info */}
            <div className="lp-hero-copy">
              <img src={logo} alt="Company logo" className="lp-brand" />
              <h1>Prof. Dr. Murtaza Najabat Ali</h1>
              <p className="role">Chief Executive Officer</p>

              <p className="lead">
                {expanded ? fullText : shortText}
                <span
                  onClick={() => setExpanded(!expanded)}
                  style={{
                    fontWeight: "600",
                    color: "#0077b5",
                    cursor: "pointer",
                    display: "inline-block",
                    marginTop: "0.5rem",
                  }}
                >
                  {expanded ? "Read Less" : "Read More"}
                </span>
              </p>

              <div className="lp-actions">
                <a
                  className="btn primary"
                  href="https://www.rmt-usa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe /> Website
                </a>
                <a
                  className="btn blue"
                  href="https://www.linkedin.com/in/prof-dr-murtaza-najabat-ali-ceng-uk-fimeche-pe-55a4469"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  className="btn green"
                  href="https://wa.me/923348558828"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
