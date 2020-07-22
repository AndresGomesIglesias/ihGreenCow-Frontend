import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              {strings["home"]}
            </Link>
          </li>
          <li>
            <Link to={`/${strings["baby"]}`}>
              {strings["baby"]}
            </Link>
          </li>
          <li>
          <Link to={`/${strings["children"]}`}>
              {strings["children"]}
            </Link>
          </li>
          <li>
          <Link to={`/${strings["mom"]}`}>
              {strings["mom"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
