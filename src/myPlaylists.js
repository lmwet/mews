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
    // either u write props or the properties names themselves in {}
    // const [code, setCode] = useState("");
    // const [error, setError] = useState("");
    const [playlists, setPlaylists] = useState("");

    const [userName, setUserName] = useState("");

    // let playlistId;
    let error;
    const authorizationCode =
        "AQCMqSAWXgj9o0gYc5h0oqtuVCE09G-Isv9oMtBjp4OPSMoU6dWpvhFDb52oU2gJ2beKLxQ-gQWqFXE7HZKhEwSXvt-3q8ZrQe9dQw7cSrjPjQkSvJAIEKa7gD6dZ5n5024M1xdKpCVZtul2QgNWp_D8i7Zvje_4oDEYNBBiv2AztGDZjqir3qkBlBaqHcn8pI5q-h39qnpNB_VwA7ehJxHxdZCiC6R60__wps_EQMmLI87Ui4U82pehu5q7rqQwiGy29JT70Vjpmv1fwolxvh-Vdxw9w4PctP2bqEOTANlEB9OFdtm8BVs7vjigQvtsDbXv5-UK6LLfG2p9TrS1X_ajRdD9oXs7vPYJ_-pJvcN-HTrDYAmycaJfMzmqurBm4c7nupoYZ-hchIMh64Fgpxa3zDfPA1LbDzPqliW_HWXwfPcRDgS3tigJRdSTRYHTIGjdBW14vWA1rDeAsoxk6u3FA3lmXK7uwolDvBXL_fx6OH1308NRHyqqfAhNMfRpGF2-Iw";

    useEffect(() => {
        console.log("newPlaylist in PL cpnt", newPlaylist);

        //get auth_code from db
        // (async () => {
        //     const { data } = await axios.get("/user.json");
        //     console.log(`code in get user`, data);
        //     setCode(data);
        // })();
        //db query to see what playlists they may have saved already
        //setPlaylists(data);
        //request to create playlist
    }, []);

    //  ---------- to create the plylist -----------

    const nameUser = ({ target }) => {
        console.log("nameuser runs");
        setUserName(target.value);
        console.log("user", userName);
    };

    const namePlaylist = ({ target }) => {
        console.log("nameplaylist runs");

        setPlaylistName(target.value);
        console.log("PlaylistName", PlaylistName);
    };

    //--------- codes for later ---------------

    // .then(function (data) {
    //     console.log("Ok. Playlist created!");
    //     playlistId = data.body["id"];

    //     // Add tracks to the playlist
    //     return spotifyApi.addTracksToPlaylist("thelinmichael", playlistId, [
    //         "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    //         "spotify:track:6tcfwoGcDjxnSc6etAkDRR",
    //         "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    //     ]);
    // })
    // .then(function (data) {
    //     console.log("Ok. Tracks added!");

    //     // Woops! Made a duplicate. Remove one of the duplicates from the playlist
    //     return spotifyApi.removeTracksFromPlaylist(
    //         "thelinmichael",
    //         playlistId,
    //         [
    //             {
    //                 uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    //                 positions: [0],
    //             },
    //         ]
    //     );
    // })
    // .then(function (data) {
    //     console.log("Ok. Tracks removed!");

    //     // Actually, lets just replace all tracks in the playlist with something completely different
    //     return spotifyApi.replaceTracksInPlaylist("thelinmichael", playlistId, [
    //         "spotify:track:5Wd2bfQ7wc6GgSa32OmQU3",
    //         "spotify:track:4r8lRYnoOGdEi6YyI5OC1o",
    //         "spotify:track:4TZZvblv2yzLIBk2JwJ6Un",
    //         "spotify:track:2IA4WEsWAYpV9eKkwR2UYv",
    //         "spotify:track:6hDH3YWFdcUNQjubYztIsG",
    //     ]);
    // })
    // .then(function (data) {
    //     console.log("Ok. Tracks replaced!");
    // })
    // .catch(function (err) {
    //     console.log(err.message);
    //     console.log("Something went wrong!");
    // });

    // console.log("cookies in PL", document.cookie);
    // console.log("code in PL", code);
    // const handleChange = ({ target }) => {
    //     setNewPlaylist(target.value);
    // };

    return (
        <div className="playlist-container">
            <span className="close" onClick={toggleBack}>
                x
            </span>
            <p className="artist-name">My Mix</p>
            <p>Create a new mixtape: enter your username and give it a title</p>

            <div className="container-mix-form" id="pl-form">
                {error && (
                    <div className="error">Ow no, something went wrong</div>
                )}

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
                    onClick={(e) => submitPlaylist(e)}
                >
                    Create
                </a>
                <div className="tracks-pic-wrapper">
                    {newPlaylist.map((track) => (
                        <div key={track.songTitle} className="track-div">
                            <ul>
                                <li className="track">{track.songTitle}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
