import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import About from '../Landing/Components/About';
import Procedures from '../Landing/Components/Procedures';
import Pricing from '../Landing/Components/Pricing';

import '../assets/responsive/Landing_responsive.css';

function Landing_routes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/procedures" element={<Procedures />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default Landing_routes;
