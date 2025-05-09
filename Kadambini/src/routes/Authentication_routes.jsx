import { Routes, Route } from 'react-router-dom';
import GLogin from '../authentication/GLogin';
import GRegister from '../authentication/GRegister';



function Authentication_routes() {
  return (
    <Routes>
      <Route path="signin" element={<GLogin />} />
      <Route path="signup" element={<GRegister />} />
    </Routes>
  );
}

export default Authentication_routes;
