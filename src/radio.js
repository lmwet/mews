import axios from "./axios";
import React, { useState } from "react";

export default function Radio() {
    const [newTrack, setNewTrack] = useState("");

    const getNewTrack = async (e) => {
        console.log("value", e.target.value);
        const link = e.target.value.trim();
        const newTrack = "spotify:track:" + link.substring(31, 53);
        setNewTrack(newTrack);
    };

    console.log("newTrack in cpnt", newTrack);

    const add = () => {
        axios
            .post("/newtrack", { newTrack: newTrack })
            .then((res) => {
                console.log("res in post newtrack", res.data);
            })
            .catch(function (err) {
                console.log("err in post newtrack", err);
            });
        document.getElementById("linkbox").value = "";
    };

    return (
        <React.Fragment>
            <h1>The Radio</h1>
            <img className="radio-pic" height="100px" src="/images/radio.png" />
            <div className="write-container">
                <div className="linkbox-container">
                    <h3 className="titel-linkbox">
                        Add a song to the Big Mix:
                    </h3>

                    <label className="label-linkbox">
                        When logged-in as "Mews":{" "}
                        <p>1. pick a song on spotify, </p>{" "}
                        <p> 2. click on the «...» next to the track,</p>
                        <p>3. click on "share" and select "copy song link" </p>
                        <p>4. paste it right there -></p>
                    </label>
                    <textarea
                        id="linkbox"
                        placeholder="Paste it here"
                        onChange={getNewTrack}
                    ></textarea>

                    <img
                        className="radio-button"
                        title="Add it to the line-up"
                        height="100px"
                        src="/images/playBack.png"
                        onClick={add}
                    />
                </div>
            </div>

            <iframe
                className="player"
                src="https://open.spotify.com/embed/playlist/6MQ4G7ECe56tUPMC8dtVwS"
                width="100%"
                height="90"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </React.Fragment>
    );
}
