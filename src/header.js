import React from "react";
import { Link } from "react-router-dom";
import axios from "./axios";

export default function Header(props) {
    // either u write props or the properties names themselves in {}
    console.log("props in header", props);

    // (async () => {
    //     try {
    //         const { data } = await axios.post(`/logout`);
    //     } catch (e) {
    //         console.log("error in logout", e);
    //     }
    // })();

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
                <a href="/callback" className="link">
                    Log Out
                </a>
            </div>
        </React.Fragment>
    );
}
