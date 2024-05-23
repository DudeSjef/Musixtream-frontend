import React from "react";
import { NavLink } from "react-router-dom";
import MusixtreamLogo from "../../../assets/musixtream logo.png"

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src={MusixtreamLogo}
          alt="Musixtream logo"
          width="36"
          height="36"
        />
      </NavLink>
    </div>
  );
};
