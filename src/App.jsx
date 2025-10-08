import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OurCEO from "./components/OurCEO";
import OurCTO from "./components/OurCTO";
import OurBDM from "./components/OurBDM";

export default function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/ceo">CEO</Link> | <Link to="/cto">CTO</Link> | <Link to="/bdm">BDM</Link>
      </nav>

      <Routes>
        <Route path="/ceo" element={<OurCEO />} />
        <Route path="/cto" element={<OurCTO />} />
        <Route path="/bdm" element={<OurBDM />} />
      </Routes>
    </Router>
  );
}
