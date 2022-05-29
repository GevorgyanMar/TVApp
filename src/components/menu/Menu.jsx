import React from "react";
import { NavLink } from "react-router-dom";
import { routing } from "../../routing/routing";
import Auth from "../auth/Auth";
import MenuSettings from "../menuSettings/MenuSettings";

import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-content">
        <Auth />
        <div className="menu-list">
          <ul>
            {routing?.map(({ path, icon, name }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} activeClassName="">
                    <img src={icon} alt="" />
                    <span className={`${"" ? "" : "hidden"}`}> {name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <MenuSettings />
      </div>
    </div>
  );
};

export default Menu;
