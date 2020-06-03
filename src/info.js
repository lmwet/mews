import React, { useState } from "react";

export default function Info({ toggleBack }) {
    const [showCreds, setShowCreds] = useState(false);
    const toggle = () => setShowCreds(true);

    return (
        <div id="info-modal">
            <strong id="shutx" onClick={toggleBack}>
                x
            </strong>
            <h3>Hi dears 💮☽⚧♆💮</h3>{" "}
            <p className="info-text">
                this page is using the spotify API. To listen to the full songs
                and get your own mix saved on your account, you can login to
                spotify
                <a href="/login" className="link">
                    {" "}
                    here.
                </a>
            </p>
            <p className="info-text">
                If you don`t want to have a spotify account, you may use
                <a href="#" onClick={toggle}>
                    <strong> these keys</strong>
                </a>{" "}
                . Have fun!
            </p>
            {showCreds ? (
                <p>username: mafiamal1312@gmail.com; PW: 13123dala</p>
            ) : null}
        </div>
    );
} //closes cpnt
