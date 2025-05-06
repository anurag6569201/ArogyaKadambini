import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNavbar from './Navbar/Navbar';
import Landing from './Landing/Landing';
import About from './Landing/Components/About';
import Procedures from './Landing/Components/Procedures';
import Pricing from './Landing/Components/Pricing';
import Footer from './Landing/Components/Footer';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        {/* Landing Routers */}
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
