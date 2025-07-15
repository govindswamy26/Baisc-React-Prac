import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>|<Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link>|<Link to="/products">Products</Link>|
    </nav>
  );
}

export default NavBar;
