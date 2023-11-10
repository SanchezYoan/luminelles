import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Acceuil</li>
        </NavLink>
        <NavLink>
          <li className="nav-portfolio">
            En savoir plus
            <ul className="nav-projects">
              <NavLink
                to="/weekend"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>week-ends bien-être</li>
              </NavLink>
              <NavLink
                to="/day"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li>journées bien-être</li>
              </NavLink>
            </ul>
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
