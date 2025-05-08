import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import MainNavbar from './Navbar/Navbar';
import Footer from './Landing/Components/Footer';
import Landing_routes from './routes/Landing_routes';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Landing_routes />
      <Footer />
    </Router>
  );
}

export default App;
