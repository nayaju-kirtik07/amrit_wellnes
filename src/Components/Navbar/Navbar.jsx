import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Navbar.css";
import { useAuth } from "../../Context/AuthContext";
import { useFilter } from "../../Context/FilterContext";
import Filter from "../Filter/Filter";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleFilter } = useFilter();

  // State for dropdown menu (desktop)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // State for mobile services dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Dynamic Services Data
  const services = [
    { name: "Service 1", route: "/service1" },
    { name: "Service 2", route: "/service2" },
    { name: "Service 3", route: "/service3" },
    // Add more services here
  ];

  useEffect(() => {
    const handleScroll = () => {
      const appBar = document.querySelector(".app-bar");
      if (window.scrollY > 50) {
        appBar.classList.add("scrolled");
      } else {
        appBar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Desktop dropdown handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleServiceClick = (serviceRoute) => {
    navigate(serviceRoute);
    handleMenuClose(); // Close the menu after navigation
  };

  // Mobile services dropdown handler
  const handleMobileServicesToggle = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleMobileServiceClick = (serviceRoute) => {
    navigate(serviceRoute);
    setMobileOpen(false); // Close the drawer
  };

  const drawer = (
    <div className="mobile-menu">
      <div className="drawer-header">
        <img src="amritlogo.png" alt="" height="60px" width="100px" />
        <IconButton onClick={handleDrawerToggle} className="drawer-close">
          <CloseIcon />
        </IconButton>
      </div>
      <List className="mobile-menu-list">
        <ListItem>
          <Button
            className="mobile-nav-button"
            fullWidth
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </ListItem>

        <ListItem>
          <Button
            className="mobile-nav-button"
            fullWidth
            onClick={handleMobileServicesToggle}
          >
            Our Services
          </Button>
        </ListItem>

        {mobileServicesOpen && (
          <>
            {services.map((service) => (
              <ListItem key={service.name}>
                <Button
                  className="mobile-nav-button nested"
                  fullWidth
                  onClick={() => handleMobileServiceClick(service.route)}
                >
                  {service.name}
                </Button>
              </ListItem>
            ))}
          </>
        )}

        <ListItem>
          <Button
            className="mobile-nav-button"
            fullWidth
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </ListItem>
        <ListItem>
          <Button
            className="mobile-nav-button"
            fullWidth
            onClick={() => navigate("/book-now")}
          >
            Book Now
          </Button>
        </ListItem>
        <ListItem>
          <Button
            className="mobile-nav-button"
            fullWidth
            onClick={() => navigate("/gallery")}
          >
            Gallery
          </Button>
        </ListItem>
        <ListItem>
          {user ? (
            <Button
              className="mobile-nav-button"
              fullWidth
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              className="mobile-nav-button"
              fullWidth
              onClick={() => navigate("/login")}
            >
              Sign Up
            </Button>
          )}
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar">
          <Typography
            variant="h6"
            className="logo-text"
            fontFamily="Playfair Display"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src="amritlogo.png" alt="logo" height="60px" width="100px" />
          </Typography>

          <Stack direction="row" spacing={2} className="right-nav">
            <div className="nav-buttons-group">
              <Button className="nav-button" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button
                className="nav-button"
                aria-controls={open ? "services-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleMenuClick}
              >
                Our Services
              </Button>
              <Menu
                id="services-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service.name}
                    onClick={() => handleServiceClick(service.route)}
                  >
                    {service.name}
                  </MenuItem>
                ))}
              </Menu>
              <Button
                className="nav-button"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Button>
              <Button
                className="nav-button"
                onClick={() => navigate("/book-now")}
              >
                Book Now
              </Button>
              <Button
                className="nav-button"
                // onClick={() => navigate("/contact")}
              >
                Gallery
              </Button>
            </div>

            {user ? (
              <Button onClick={handleLogout} className="navbar-signup-button">
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="navbar-signup-button"
              >
                Sign Up
              </Button>
            )}
          </Stack>

          <Box className="mobile-icons">
            {location.pathname === "/menu" && (
              <IconButton className="filter-icon" onClick={toggleFilter}>
                <FilterListIcon />
              </IconButton>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          className="mobile-drawer"
        >
          {drawer}
        </Drawer>
      </AppBar>
      <Filter />
    </>
  );
};

export default Navbar;
