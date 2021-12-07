import { Switch } from "antd";
import React, { useContext } from "react";
import { themeContext } from "../Context/ThemeContext";
import "./Header.css";

function Header() {
  const { theme, setTheme } = useContext(themeContext);

  const handleCheck = (ckecked) => {
    if (ckecked) {
      setTheme("lightMode");
    } else {
      setTheme("darkMode");
    }
  };

  return (
    <div
      className="header"
      style={{
        color: theme === "lightMode" ? "black" : "white",
        background: theme === "lightMode" ? "white" : "black",
        boxShadow: `2px 4px 6px ${theme === 'lightMode' ? "#ccc" : "#444"}`
      }}
    >
      My Header
      <Switch
        style={{ position: "absolute", right: 10, background: theme === 'lightMode' ? '#1890FF' : '#aaa' }}
        checked={theme === "lightMode" ? true : false}
        onChange={handleCheck}
      />
    </div>
  );
}

export default Header;
