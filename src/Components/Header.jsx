// src/Components/Header.jsx
import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      
      <div className="header-right">
        <a href="/careers">Careers</a>
        <a href="http://121.200.53.156/hindusthan/" target="_blank">E-Campus Login</a>
        <a href="/mandatory-discloser">Mandatory Discloser</a>
        <a href="/contact">Contact Us</a>
        <a className="counselling-code">TNEA CODE: 2227</a>
      </div>
       
    </div>
  );
};

export default Header;
