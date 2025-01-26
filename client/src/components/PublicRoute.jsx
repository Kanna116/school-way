import { Navigate } from "react-router-dom";
import { useAuth } from "../context/user";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component }) => {
  const { isUserLoggedIn } = useAuth();

  return isUserLoggedIn ? <Navigate to="/home" /> : <Component />;
};

export default PublicRoute;
