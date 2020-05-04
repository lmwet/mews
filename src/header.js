import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    // either u write props or the properties names themselves in {}

    return (
        <React.Fragment>
            <div id="header">
                <Link to="/">
                    <img id="logo-pic" src="/images/mews.png" alt="logo" />
                    <h1 id="title">mews</h1>
                </Link>
                <img id="triangle" src="/images/triangle.png" />

                <a href="/login" className="link">
                    Log in
                </a>
                <a href="/logout" className="link">
                    Log Out
                </a>
                <a href="/jukebox" className="link">
                    The Jukebox
                </a>
                <img id="patch" src="/images/patch.png" />
            </div>
        </React.Fragment>
    );
}
