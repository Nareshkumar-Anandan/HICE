// src/Components/Header.jsx
import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-right">
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
        <a href="/alumni">Alumni</a>
        <a href="/faculty">Faculty</a>
        <a href="/school">School</a>
      </div>
    </div>
  );
};

export default Header;
