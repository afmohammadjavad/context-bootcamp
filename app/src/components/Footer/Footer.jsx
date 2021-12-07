import React, { useContext } from "react";
import { themeContext } from "../Context/ThemeContext";
import "./Footer.css";

function Footer() {
  const { theme } = useContext(themeContext);

  return (
    <div
      className="footer"
      style={{
        color: theme === "lightMode" ? "black" : "white",
        background: theme === "lightMode" ? "white" : "black",
        boxShadow: `-2px -4px 6px ${theme === 'lightMode' ? "#ccc" : "#444"}`
      }}
    >
      My Footer
    </div>
  );
}

export default Footer;
