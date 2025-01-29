import { Box, Typography } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#white",
        color: "#000",
        padding: "10px 20px",
        // boxShadow:
        //   "2px 0px 4px 2px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);",
      }}
    >
      <Logo />

      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} Schoolway. All rights reserved.
      </Typography>
      {/* <Box sx={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
      </Box> */}
    </Box>
  );
};

export default Footer;
