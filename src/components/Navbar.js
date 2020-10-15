import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
    
    const getTextDecoration = (linkPathname) => {
        return props.location.pathname === linkPathname ? "underline" : "none";
    }

    return (
        <nav>
            <Link
                to="/"
                style={{
                    textDecoration: getTextDecoration("/"),
                    color: "inherit",
                }}
            >
                Home
            </Link>
            {" | "}
            <Link
                to="/about"
                style={{
                    textDecoration: getTextDecoration("/about"),
                    color: "inherit",
                }}
            >
                About
            </Link>
        </nav>
    );
}

export default withRouter(Navbar);

