import { Link } from "react-router-dom";
import axios from "./axios";
import React, { useEffect, useState } from "react";

export default function MyPlaylists() {
    // either u write props or the properties names themselves in {}
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [playlists, setPlaylists] = useState("");
    const [newPlaylist, setNewPlaylist] = useState("");

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/user.json");
            console.log(`code in get user`, data);
            setCode(data);

            //db query to see what pl they have
            //setPlaylists(data);
        })();
    }, [playlists]);
    console.log("cookies in PL", document.cookie);
    console.log("code in PL", code);
    const handleChange = ({ target }) => {
        setNewPlaylist(target.value);
    };

    return (
        <div>
            <h3>My Mixes</h3>
            <p>Create a new mixtape: enter your username and give it a title</p>

            <div className="container-mix-form" id="pl-form">
                {error && (
                    <div className="error">Ow no, something went wrong</div>
                )}
                <label> Whose mix? </label>
                <input
                    name="Username"
                    placeholder="username"
                    onChange={(e) => handleChange(e)}
                />
                <label> Name of the mixtape </label>
                <input
                    name="playlist"
                    placeholder="mix"
                    onChange={(e) => handleChange(e)}
                />
                <button className="submit">Create</button>
            </div>
        </div>
    );
}
