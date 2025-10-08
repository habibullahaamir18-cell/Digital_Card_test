// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import OurCEO from "./components/OurCEO";
import OurCTO from "./components/OurCTO";
import OurBDM from "./components/OurBDM";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect default path to a blank or home page */}
        <Route path="/" element={<div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Welcome! Please use /ceo, /cto, or /bdm in URL to view profiles</h2>
        </div>} />

        {/* Profile routes */}
        <Route path="/ceo" element={<OurCEO />} />
        <Route path="/cto" element={<OurCTO />} />
        <Route path="/bdm" element={<OurBDM />} />

        {/* Redirect any unknown path to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
