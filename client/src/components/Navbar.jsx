import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { useAuth } from "../context/user";

const pages = ["Track", "Bookings"];

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #00000040",
        zIndex: "100",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "center",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SchoolWay
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                gap: "10px",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, bgcolor: "#e89f40" }}
              >
                {user?.role === "rider" ? (
                  <Avatar
                    alt={user?.username}
                    src={
                      user.riderData?.image
                        ? user.riderData?.image
                        : "/static/images/avatar/2.png"
                    }
                    sx={{ bgcolor: "#e89f40" }}
                  />
                ) : (
                  <Avatar
                    alt={user?.username}
                    src={
                      user?.image ? user.image : "/static/images/avatar/2.png"
                    }
                    sx={{ bgcolor: "#e89f40" }}
                  />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link
                to="/profile"
                style={{ all: "unset" }}
                onClick={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography sx={{ textAlign: "center" }}>Profile</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/bookings"
                style={{ all: "unset" }}
                onClick={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography sx={{ textAlign: "center" }}>Bookings</Typography>
                </MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleCloseUserMenu();
                }}
              >
                <Typography sx={{ textAlign: "center" }}>Log out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
