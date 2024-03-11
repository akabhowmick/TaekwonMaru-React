import { NavLink, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="nav-bar">
        <nav>
          <h1 id="site-header">TaekwonMaru</h1>
          <div className="nav-links">
            <NavLink className="single-nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="single-nav-link" to="/about-us">
              About Us
            </NavLink>
            <NavLink className="single-nav-link" to="/programs">
              Programs
            </NavLink>
            <NavLink className="single-nav-link" to="/schedule">
              Schedule
            </NavLink>
            <NavLink className="single-nav-link" to="/contact">
              Contact Us
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  ButtonLink,
  ExtendedNavbar,
  NavbarLinkExtended,
} from "./NavStyle";
const Navbar: React.FC = () => {
  // ..
  const location = useLocation();
  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);
  // ..
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extend={extendNavbar}>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link active" to="/home">
          Home
        </NavbarLink>
        <NavbarLink className="nav-link" to="/about">
          About Us
        </NavbarLink>
        <NavbarLink className="nav-link" to="/contact">
          Contact Us
        </NavbarLink>
        <ButtonLink
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
        </ButtonLink>
      </NavbarLinkContainer>
      {extendNavbar && (
        <ExtendedNavbar>
          <NavbarLinkExtended className="nav-link active" to="/home">
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/about">
            About Us
          </NavbarLinkExtended>
          <NavbarLinkExtended className="nav-link" to="/contact">
            Contact Us
          </NavbarLinkExtended>
        </ExtendedNavbar>
      )}
    </NavbarContainer>
  );
};
export default Navbar;