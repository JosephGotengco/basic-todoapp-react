import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/" style={{ textDecoration: "underline", color: "inherit" }}>
                Home
            </Link>
            {" | "}
            <Link to="/about" style={{ textDecoration: "underline", color: "inherit" }}>
                About
            </Link>
        </nav>
    );
}

export default Navbar;
