import * as React from "react";
import logo from "../../assets/logo.png";

import {
  LogoContainer,
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  ResponsiveNavBarContainer,
  ResponsiveNavbarLink,
} from "./navbar.styled";

const NavBar = ({ pages }) => {
  // state for controlling navbar resposiveness
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  //responsive menu handler
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //responsive menu handler
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>

      <NavbarLinkContainer>
        {pages.map((page) => (
          <NavbarLink
            key={page.name}
            to={page.route}
            onClick={handleCloseNavMenu}
          >
            {page.name}
          </NavbarLink>
        ))}
      </NavbarLinkContainer>

      <ResponsiveNavBarContainer
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClick={handleOpenNavMenu}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <ResponsiveNavbarLink
            key={page.name}
            to={page.route}
            onClick={handleCloseNavMenu}
          >
            {page.name}
          </ResponsiveNavbarLink>
        ))}
      </ResponsiveNavBarContainer>
    </NavbarContainer>
  );
};

export default NavBar;
