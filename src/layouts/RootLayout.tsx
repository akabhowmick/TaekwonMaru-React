import { NavLink, Outlet } from "react-router-dom";
import { taekwonMaruLogo } from "../utils/home-info";
import { NavUnlisted } from "./NavbarStyles";
import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { CircleIndicator } from "../Components/SharedSections/Animations/Animations";

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
      onClick={() => setShowNavbar(false)}
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
          <NavUnlisted
            aria-label="Larger viewport navigation menu with links"
            className="main-navbar-ul"
          >
            <ul className="main-regular-links">{linksWithNavLink}</ul>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <MenuIcon />
            </div>
            {showNavbar && (
              <div className="nav-elements">
                <ul>{linksWithNavLink}</ul>
              </div>
            )}

            <NavLink
              onClick={() => setShowNavbar(false)}
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
              <h2 className="text-xl md:text-2xl lg:text-3xl">TaekwonMaru</h2>
            </NavLink>
          </NavUnlisted>
          <CircleIndicator />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
