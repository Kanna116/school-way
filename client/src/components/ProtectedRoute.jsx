import { Navigate } from "react-router-dom";
import { useAuth } from "../context/user";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component }) => {
  const { isUserLoggedIn } = useAuth();

  return !isUserLoggedIn ? <Navigate to="/login" /> : <Component />;
};

export default ProtectedRoute;
