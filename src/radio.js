import axios from "./axios";
import React, { useState } from "react";

export default function Radio() {
    const [newTrack, setNewTrack] = useState("");
    // const [currentTrack, setCurrentTrack] = useState("");

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
                        Got a song to add to the Big Mix?{" "}
                    </h3>
                    <h3 className="titel-linkbox">
                        Post a spotify track link here.{" "}
                    </h3>

                    <label className="label-linkbox">
                        On spotify, click on the <strong>...</strong> next to
                        the track and select "copy song link"{" "}
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
                src="https://open.spotify.com/embed/playlist/54hm47gbdj4LyXvBbh0bVY"
                width="100%"
                height="90"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </React.Fragment>
    );
}
