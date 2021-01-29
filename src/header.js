import React from "react";
import { Link } from "react-router-dom";
import Rocket from "./rocket";

export default function Header() {
    return (
        <React.Fragment>
            <div id="header">
                <Link to="/">
                    <img id="logo-pic" src="/images/mews.png" alt="logo" />
                    <h1 id="title">mews</h1>
                </Link>
                <div id="menu-bar">
                    <img id="triangle" src="/images/triangle.png" />

                    <a href="/login" className="link">
                        Log in
                    </a>
                    <Link to="/" className="link">
                        Home
                    </Link>
                    <Link to="/jukebox" className="link">
                        Jukebox
                    </Link>
                    <Link to="/radio" className="link">
                        {" "}
                        Radio
                    </Link>

                    <Link to="/help" className="link">
                        ??
                    </Link>
                </div>
                <Rocket />
            </div>
        </React.Fragment>
    );
}
