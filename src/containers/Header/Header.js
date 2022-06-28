import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import { CgMenuRound } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const setNavLinkClass = ({ isActive }) =>
    isActive ? "nav-active" : "nav-link";

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <NavLink to="/" rel="noopener">
              <img src="./images/logo-white.png" alt="" />
            </NavLink>
          </div>
          <div className="col-xs-12 col-sm-8">
            {(toggleMenu || screenWidth > 768) && (
              <ul className="nav-menu">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    rel="noopener"
                    className={setNavLinkClass}
                    onClick={toggleNav}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    rel="noopener"
                    className={setNavLinkClass}
                    onClick={toggleNav}
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/shop"
                    rel="noopener"
                    className={setNavLinkClass}
                    onClick={toggleNav}
                  >
                    SHOP
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/service"
                    rel="noopener"
                    className={setNavLinkClass}
                    onClick={toggleNav}
                  >
                    SERVICES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/form"
                    rel="noopener"
                    className={setNavLinkClass}
                    onClick={toggleNav}
                  >
                    CONTACTS
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          {toggleMenu ? (
            <AiOutlineCloseCircle
              onClick={toggleNav}
              size="1.7em"
              className="react-icons-navbar"
            />
          ) : (
            <CgMenuRound
              onClick={toggleNav}
              size="1.7em"
              className="react-icons-navbar"
            />
          )}
        </div>
      </div>
    </header>
  );
};
