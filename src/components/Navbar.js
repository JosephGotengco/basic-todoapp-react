import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
    const getTextDecoration = (linkPathname) => {
        return props.location.pathname === linkPathname ? "underline" : "none";
    };

    // Link component is used to create links to the different routes
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
            {" | "}
            <Link
                to="/api"
                style={{
                    textDecoration: getTextDecoration("/api"),
                    color: "inherit",
                }}
            >
                API
            </Link>
        </nav>
    );
}

export default withRouter(Navbar);
