import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  RiMenuFill,
  RiCloseFill,
  RiLayoutGridFill,
  RiSettings3Fill,
  RiLogoutCircleLine,
} from "react-icons/ri";
import logo from "/assets/images/logo.png";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <IconContext.Provider value={{ color: "undefined" }}>
      <div className="navigation">
        <NavLink to="#" className="menu-bars">
          <RiMenuFill onClick={showSidebar} />
        </NavLink>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars menu__bars--close">
              <RiCloseFill />
            </NavLink>
          </li>

          <div className="nav__links__wrapper">
            <div className="nav__links__primary">
              <li className="nav-text">
                <NavLink to="/dashboard" activeclassname="active">
                  <RiLayoutGridFill />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-text">
                <NavLink to="/settings" activeclassname="active">
                  <RiSettings3Fill />
                  <span>Settings</span>
                </NavLink>
              </li>
            </div>

            <div className="nav__links__secondary">
              <li className="nav-text">
                <NavLink
                  to="/"
                  activeclassname="active"
                  onClick={logoutHandler}
                >
                  <RiLogoutCircleLine />
                  <span>Logout</span>
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Sidebar;
