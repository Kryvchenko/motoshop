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
    <header className={screenWidth > 767 ? "header" : "header-mob"}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <NavLink to="/home" rel="noopener">
              <img src="./images/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="col-xs-12 col-sm-8">
            {(toggleMenu || screenWidth > 768) && (
              <ul className="nav-menu">
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    rel="noopener"
                    className={setNavLinkClass}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    rel="noopener"
                    className={setNavLinkClass}
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/shop"
                    rel="noopener"
                    className={setNavLinkClass}
                  >
                    SHOP
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    rel="noopener"
                    className={setNavLinkClass}
                  >
                    BLOG
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contacts"
                    rel="noopener"
                    className={setNavLinkClass}
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
