import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import WebGLBackground from "./WebGLBackground";
import logo from "../assets/revive-logo.png";
import ceo from "../assets/ceo.png";
import tablogo from "../assets/tablogo.png";

export default function OurCEO() {
  const [expanded, setExpanded] = useState(false);

  const shortText = `Prof. Dr. Murtaza Najabat Ali is a biomedical engineer and visionary CEO of Revive Medical Technologies Inc., while also serving as Professor and Head of Biomedical Engineering at Riphah International University, Islamabad.`;

  const fullText = `Prof. Dr. Murtaza Najabat Ali is a biomedical engineer by profession and the visionary CEO of Revive Medical Technologies Inc., while also serving as Professor and Head of the Biomedical Engineering Department at Riphah International University, Islamabad.
After completing his Ph.D. and postdoctoral research at the University of Sheffield, UK, he returned to Pakistan with a mission to establish the country's first medical device industry. His groundbreaking journey began with support from Pakistan's Ministry of Science and Technology, where he set up a pilot-scale production plant in 2007, marking the nation's entry into indigenous cardiovascular device manufacturing. He and his core team received specialized training in Germany for the production of cardiovascular stents and catheters.
He was entrusted by the Prime Minister’s Office to establish Pakistan’s first state-owned medical device industry. As a result, Dr. Najabat founded Novative Health Technologies (NHT), Pakistan's first ISO 13485-certified and DRAP-licensed medical device industry. As the founding Executive Director of the Medical Devices Development Centre (MDDC) at NUST and CEO of NHTPL, he successfully developed and produced four DRAP-approved cardiovascular products—Rejuvenate, VasoGlide, N-DEavour, and Tracker—priced at one-fourth the cost of imported alternatives.
During the COVID-19 pandemic, he led the development of Pakistan's first indigenous ventilators and respiratory devices, while localizing production of specialized manufacturing equipment previously imported from Germany and the U.S.
With a career spanning over two decades, Dr. Najabat has founded the Biomedical Engineering & Sciences Department at NUST, established the Prosthetics and Implantology Lab, and facilitated multiple technology transfers. His outstanding work has earned him national honors including the National Development Award, Presidential Award, PEC Excellence Award, and COMSTECH’s Distinguished Scholar Award. He has over 50 peer-reviewed publications, 27 patents, and significant research funding to his name.
In 2023, Dr. Najabat co-founded Revive Medical Technologies Inc. (RMT), a U.S.-based company addressing critical gaps in medical device development through end-to-end solutions backed by U.S.-based physicians and industry experts—continuing his legacy of innovation in medical device manufacturing.`;

  return (
    <main className="lp">
      <section className="lp-hero">
        <WebGLBackground />
        <div className="lp-shell">
          <div className="lp-hero-grid">
            <div className="lp-hero-media">
              <img src={ceo} alt="Prof. Dr. Murtaza Najabat Ali" className="hero-portrait" />
            </div>
            <div className="lp-hero-copy">
              <img src={logo} alt="Revive Logo" className="lp-brand" />
              <h1>Prof. Dr. Murtaza Najabat Ali</h1>
              <p className="role">Chief Executive Officer</p>
              <p className="lead">
                {expanded ? fullText : shortText}
                <span onClick={() => setExpanded(!expanded)} className="read-more">
                  {expanded ? "Read Less" : "Read More"}
                </span>
              </p>
              <div className="lp-actions">
                <a className="btn rmt" href="https://www.rmt-usa.com/" target="_blank" rel="noopener noreferrer">
                  <img src={tablogo} alt="RMT Logo" style={{ width: "20px", height: "20px" }} />
                  RMT
                </a>
                <a className="btn blue" href="https://www.linkedin.com/in/prof-dr-murtaza-najabat-ali-ceng-uk-fimeche-pe-55a4469" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a className="btn green" href="https://wa.me/923348558828" target="_blank" rel="noopener noreferrer">
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
