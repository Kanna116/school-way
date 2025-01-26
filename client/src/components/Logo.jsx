import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo-3.png";
import Box from "@mui/material/Box";

const Logo = () => {
  return (
    <Link to="/">
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
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Link>
  );
};

export default Logo;
