import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNavbar from './Navbar/Navbar';
import Footer from './Landing/Components/Footer';
import Landing_routes from './routes/Landing_routes';
import Authentication_routes from './routes/Authentication_routes';

import PublicRoute from './authentication/PublicRoute.jsx';
import ProtectedRoute from './authentication/ProtectedRoute.jsx';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute>
              <Landing_routes />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/*" 
          element={
            <PublicRoute>
              <Authentication_routes />
            </PublicRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
