import { Box, Link, Typography } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
        height: "200px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3,
          textAlign: "center",
        }}
      >
        {/* About Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
          <Typography
            variant="body2"
            sx={{
              mt: 2,
            }}
          >
            Providing safe and reliable school transportation for students.
            Reliable, on-time service for your peace of mind.
          </Typography>
        </Box>

        {/* Quick Links Section */}
        <Box sx={{ flex: "1 1 30%", minWidth: "200px" }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link href="/about" color="inherit" variant="body2" display="block">
              About Us
            </Link>
            <Link
              href="/services"
              color="inherit"
              variant="body2"
              display="block"
            >
              Services
            </Link>
            <Link
              href="/contact"
              color="inherit"
              variant="body2"
              display="block"
            >
              Contact
            </Link>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box sx={{ flex: "1 1 30%", minWidth: "200px" }}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            <strong>Email:</strong> info@schoolway.com
          </Typography>
          <Typography variant="body2">
            <strong>Phone:</strong> (123) 456-7890
          </Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Schoolway. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
