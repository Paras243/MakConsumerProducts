import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpeg";


export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Contact Us", to: "/contact" },
    { label: "Blogs", to: "/blogs" },
    { label: "News", to: "/news" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#003366", // Dark blue background
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile ? "10px" : "5px 20px",
            gap: isMobile ? 2 : 0,
          }}
        >
          {/* Logo & Title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: isMobile ? "40px" : "50px",
                marginRight: "10px",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                color: "#fff",
              }}
            >
              Mak Consumer Products
            </Typography>
          </Box>

          {/* Search Bar + Nav Links or Menu */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: isMobile ? "100%" : "auto",
              gap: 2,
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            {/* Search Bar */}
            <TextField
              placeholder="Search for the Mak Consumer Products"
              variant="outlined"
              size="small"
              sx={{
                width: isMobile ? "100%" : isTablet ? 250 : 400,
                backgroundColor: "#ffffff",
                borderRadius: "50px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
              }}
              InputProps={{ }}
            />

            {/* Nav Links for laptop */}
            {isLaptop && (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    component={Link}
                    to={link.to}
                    sx={{ color: "#fff", fontWeight: 500 }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Hamburger Menu for Mobile/Tablet */}
            {!isLaptop && (
              <>
                <IconButton
                  sx={{ color: "#fff" }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                >
                  <Box sx={{ width: 250, padding: 2 }}>
                    <List>
                      {navLinks.map((link) => (
                        <ListItem
                          button
                          key={link.label}
                          component={Link}
                          to={link.to}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <ListItemText primary={link.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            )}
          </Box>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, marginTop: isMobile ? 1 : 0 }}>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                backgroundColor: "#ff7eb3",
                "&:hover": { backgroundColor: "#ff4e9b" },
                borderRadius: "50px",
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{
                backgroundColor: "#3ae374",
                "&:hover": { backgroundColor: "#2ecc71" },
                borderRadius: "50px",
              }}
            >
              Register
            </Button>
            <IconButton
              component={Link}
              to="/cart"
              sx={{
                backgroundColor: "#7158e2",
                color: "#fff",
                "&:hover": { backgroundColor: "#574b90" },
              }}
            >
              <ShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
