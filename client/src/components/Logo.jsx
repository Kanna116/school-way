import { Link } from "react-router-dom";
// import logo1 from "../assets/images/logo-3.png";
import logo1 from "../assets/images/schoolway-logo-2.svg";
import Box from "@mui/material/Box";
import { useAuth } from "../context/user";

const Logo = () => {
  const { isUserLoggedIn } = useAuth();
  return (
    <Link to={isUserLoggedIn ? "/home" : "/"}>
      <Box
        sx={{
          width: "200px",
          height: "50px",
        }}
      >
        <img
          src={logo1}
          alt="Logo variant 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
    </Link>
  );
};

export default Logo;
