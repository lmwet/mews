import axios from "./axios";
import React, { useState } from "react";

export default function MyPlaylists({ newPlaylist, toggleBack }) {
    const [playlistName, setPlaylistName] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState(false);

    const nameUser = ({ target }) => {
        setUserName(target.value);
        console.log("user name", userName);
    };

    const namePlaylist = ({ target }) => {
        setPlaylistName(target.value);
        console.log("PlaylistName", playlistName);
    };

    const submitPlaylist = async () => {
        console.log("submit playlist running");
        console.log("newPlaylist", newPlaylist);

        axios
            .post("/mix", {
                newPlaylist,
                playlistName,
                userName,
            })
            .then((res) => {
                if (res.data.success) {
                    console.log("data in post mix", res);
                } else {
                    console.log("er in post mix");
                }
            });

        setMessage(true);
        document.getElementById("username").value = "";
        document.getElementById("mix-name").value = "";

        const tracksList = document.getElementsByClassName("track");
        console.log(tracksList);
        for (var i = 0; i < tracksList.length; i++) {
            tracksList[i].innerHTML = "";
        }
    };

    return (
        <div className="playlist-container">
            <span className="close" onClick={toggleBack}>
                x
            </span>
            <p className="artist-name">My Mix</p>
            <p>Create a new mixtape: enter your username and give it a title</p>

            <div className="container-mix-form" id="pl-form">
                <input
                    id="username"
                    name="username"
                    placeholder="user name"
                    onChange={(e) => nameUser(e)}
                />

                <input
                    id="mix-name"
                    name="playlistName"
                    placeholder="mix name"
                    onChange={(e) => namePlaylist(e)}
                />
                <a
                    className="btn btn-primary"
                    href="#"
                    id="submit-playlist"
                    onClick={() => submitPlaylist()}
                >
                    Create
                </a>
                {message ? (
                    <span className="error-message">
                        Your playlist has been created, uou can now listen to it
                        in the Jukebox section!
                    </span>
                ) : null}
                <div className="tracks-pic-wrapper">
                    <ul>
                        {newPlaylist.map((track) => (
                            <li key={track.songTitle} className="track">
                                {track.songTitle}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
