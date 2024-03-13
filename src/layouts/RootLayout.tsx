import { NavLink, Outlet } from "react-router-dom";
import { taekwonMaruLogo } from "../utils/home-info";
import { NavUnlisted } from "./NavbarStyles";
import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  { name: "About Us", path: "/about-us" },
  { name: "Programs", path: "/programs" },
  { name: "Schedule", path: "/schedule" },
  { name: "Book a Class", path: "/contact" },
];

export const RootLayout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const linksWithNavLink = links.map((link, index) => (
    <NavLink
      key={index}
      to={link.path}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >
      <li>{link.name}</li>
    </NavLink>
  ));

  return (
    <div className="root-layout">
      <header className="nav-bar">
        <nav>
          <NavUnlisted className="main-navbar-ul">
            <div className="main-regular-links">{linksWithNavLink}</div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <MenuIcon />
            </div>
            {showNavbar && (
              <div className="nav-elements">
                <ul>{linksWithNavLink}</ul>
              </div>
            )}

            <NavLink
              to="/"
              id="logo-with-title"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            >
              <img className="navbar-logo" src={taekwonMaruLogo} alt="tkd-main-logo" />
              <h2>TaekwonMaru</h2>
            </NavLink>
          </NavUnlisted>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
