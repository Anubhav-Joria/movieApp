import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar sticky-top  bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {" "}
            QuadB Tech{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
