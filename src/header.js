import React from "react";
import { Link } from "react-router-dom";
import axios from "./axios";

export default function Header() {
    // either u write props or the properties names themselves in {}

    return (
        <React.Fragment>
            <div id="header">
                <Link to="/">
                    <img id="logo-pic" src="/images/mews.png" alt="logo" />
                    <h1 id="title">mews</h1>
                </Link>
                <a href="/login" className="link">
                    Log in
                </a>
                <a href="/logout" className="link">
                    Log Out
                </a>
                <a className="link" href="/my-playlists">
                    my mix
                </a>
            </div>
        </React.Fragment>
    );
}
