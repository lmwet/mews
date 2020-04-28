import { Link } from "react-router-dom";
import axios from "./axios";
import React, { useEffect, useState } from "react";
const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});

export default function MyPlaylists({ newPlaylist, toggleBack }) {
    const [playlistName, setPlaylistName] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState(false);

    const nameUser = ({ target }) => {
        setUserName(target.value);
        console.log("user name in electro", userName);
    };

    const namePlaylist = ({ target }) => {
        setPlaylistName(target.value);
        console.log("PlaylistName", playlistName);
    };

    const submitPlaylist = async () => {
        console.log("submit playlist running");

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
                    name="username"
                    placeholder="user name"
                    onChange={(e) => nameUser(e)}
                />

                <input
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
                        Your playlist was saved on your Spotify account!
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
