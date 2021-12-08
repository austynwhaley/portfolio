import React from "react";
import "./style.css";

function Navbar() {

    return (
        <nav>
            <ul>
            <li><a href="/portfolio">Home</a></li>
            <li><a href="/portfolio/#/about/">About Me</a></li>
            <li><a href="/portfolio/#/portfolio/">Portfolio</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;