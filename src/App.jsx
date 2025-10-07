import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/revive-logo.png";
import OurCEO from "./components/OurCEO";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Revive Logo" className="splash-logo" />
      </div>
    );
  }

  return <OurCEO />;
}
