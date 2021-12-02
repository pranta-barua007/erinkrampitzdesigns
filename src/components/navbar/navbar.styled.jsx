import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

export const NavbarContainer = ({ children }) => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: "#a6a6a6",
      paddingTop: "0.5rem",
      fontFamily: "'Montserrat' ,Arial, Helvetica, sans-serif",
      boxShadow: "none",
    }}
  >
    <nav>
      <Container maxWidth="lg">
        <Toolbar disableGutters>{children}</Toolbar>
      </Container>
    </nav>
  </AppBar>
);

export const LogoContainer = ({ children }) => (
  <Box
    sx={{
      mr: 2,
      display: { xs: "flex", md: "flex" },
      width: "auto",
      height: { xs: "50px", md: "80px" },
    }}
  >
    {children}
  </Box>
);

export const NavbarLinkContainer = ({ children }) => (
  <Box
    sx={{
      flexGrow: 1,
      display: { xs: "none", md: "flex" },
      justifyContent: "flex-end",
    }}
  >
    {children}
  </Box>
);

export const NavbarLink = ({ children, to, ...otherProps }) => (
  <Tooltip title={children}>
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none",
        textTransform: "uppercase",
        display: "block",
        fontSize: "11px",
        fontWeight: "400",
        letterSpacing: "3px",
        padding: "0 1rem",
        color: isActive ? "black" : "white",
        transition: "linear 0.3s",
      })}
      {...otherProps}
    >
      {children}
    </NavLink>
  </Tooltip>
);

export const ResponsiveNavBarContainer = ({
  children,
  anchorEl,
  open,
  onClick,
  onClose,
}) => (
  <Box
    sx={{
      flexGrow: 1,
      display: { xs: "flex", md: "none" },
      justifyContent: "flex-end",
    }}
  >
    <IconButton
      size="large"
      aria-label="Menu"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={open}
      onClose={onClose}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      {children}
    </Menu>
  </Box>
);

export const ResponsiveNavbarLink = ({ children, to, ...otherProps }) => (
  <NavLink
    to={to}
    style={{
      textDecoration: "none",
      textAlign: "center",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "black",
    }}
    {...otherProps}
  >
    <MenuItem divider={true}>{children}</MenuItem>
  </NavLink>
);
