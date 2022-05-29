import React from "react";
import "./menuSettings.scss";

const MenuSettings = () => {
  const setting = ["language", "get help", "exit"];
  return (
    <div className="setting-list">
      <ul>
        {setting && setting.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default MenuSettings;
