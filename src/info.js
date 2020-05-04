import React, { useState } from "react";

export default function Info({ toggleBack }) {
    const [showCreds, setShowCreds] = useState(false);
    const toggle = () => setShowCreds(true);

    return (
        <div id="info-modal">
            <strong id="shutx" onClick={toggleBack}>
                x
            </strong>
            <p> Hi dears, this page is using the spotify API. </p>{" "}
            <p>
                So unfortunately, in order to listen to the full songs and get
                your own mix saved on your account you can login to spotify
                <a href="/login" className="link">
                    {" "}
                    here.
                </a>
            </p>
            <p>
                If you don`t want to have a spotify account, you may use
                <a href="#" onClick={toggle}>
                    <strong> this</strong>
                </a>{" "}
                carefully. Have fun!
            </p>
            {showCreds ? (
                <p>username: mafiamal1312@gmail.com; PW: 13123dala</p>
            ) : null}
        </div>
    );
} //closes cpnt
