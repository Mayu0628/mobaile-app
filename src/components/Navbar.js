import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>金沢旅日記</h1>
      </Link>
    </nav>
  );
};
