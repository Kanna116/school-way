import { Navigate } from "react-router-dom";
import { useAuth } from "../context/user";
import Navbar from "./Navbar";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component }) => {
  const { isUserLoggedIn } = useAuth();

  return !isUserLoggedIn ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Navbar />
      <div className="protected-page">
        <Component />
      </div>
      <Footer />
    </>
  );
};

export default ProtectedRoute;
