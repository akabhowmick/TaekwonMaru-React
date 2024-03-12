import { NavLink, Outlet } from "react-router-dom";
import { taekwonMaruLogo } from "../utils/home-info";
import { NavUnlisted } from "./NavbarStyles";
import "./Navbar.css";

const links = [
  { name: "About Us", path: "/about-us" },
  { name: "Programs", path: "/programs" },
  { name: "Schedule", path: "/schedule" },
];

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="nav-bar">
        <nav>
          <NavUnlisted>
            <div className="main-regular-links">
              {links.map((link, index) => (
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
              ))}
              <NavLink
                to="/contact"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                <li>Book a Class!</li>
              </NavLink>
            </div>

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
