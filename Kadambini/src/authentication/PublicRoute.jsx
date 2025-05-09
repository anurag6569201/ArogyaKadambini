import { Navigate } from "react-router-dom";

// const isAuthenticated = () => {
//     return !!localStorage.getItem("authToken"); 
// };

function PublicRoute({ children }) {
    // if (isAuthenticated()) {
    //     return <Navigate to="/" replace />;
    // }
    return children;
}

export default PublicRoute;
