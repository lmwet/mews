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
                <img id="triangle" src="/images/triangle.png" />

                <a href="/login" className="link">
                    Log in
                </a>
                <a href="/jukebox" className="link">
                    The Jukebox
                </a>
                <a href="/radio" className="link">
                    The Radio
                </a>
                <Rocket />
            </div>
        </React.Fragment>
    );
}
