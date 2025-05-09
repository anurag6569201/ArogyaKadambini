import { Routes, Route } from 'react-router-dom';
import GLogin from '../authentication/GLogin';
import GRegister from '../authentication/GRegister';
import GPasswordChange from '../authentication/GPasswordChange';
import GPasswordResetDone from '../authentication/GPasswordResetDone';



function Authentication_routes() {
  return (
    <Routes>
      <Route path="signin" element={<GLogin />} />
      <Route path="signup" element={<GRegister />} />
      <Route path="password/reset" element={<GPasswordChange />} />
      <Route path="password/reset/done" element={<GPasswordResetDone />} />
    </Routes>
  );
}

export default Authentication_routes;
