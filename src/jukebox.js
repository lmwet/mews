import React, { useEffect, useState } from "react";
import axios from "./axios";
import MyPlaylists from "./myPlaylists";

export default function Jukebox() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        axios
            .get("/mix")
            .then((res) => {
                if (res.data[1].success) {
                    setPlaylists(res.data[0].rows);
                }
            })
            .catch(function (err) {
                console.log("err in get /mix", err);
            });
    }, []);

    const playMix = (e) => {
        e.preventDefault();
        const elem = e.target;
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("playlist", "embed/playlist");
        setCurrentTrack(embedUrl);
    };

    const setBg = (e) => {
        console.log("setBg runnin");

        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    };

    return (
        <div>
            <h1>The Jukebox </h1>
            <p>All the mixes we make...</p>
            <img
                className="jukebox-pic"
                height="100px"
                src="/images/jukebox.png"
            />

            <div className="jukebox-grid">
                {playlists.map((mix) => (
                    <div key={mix.id} onClick={setBg} className="mix-element">
                        <h3 className="mix-name">
                            <a onClick={playMix} href={mix.href}>
                                {mix.name}
                            </a>
                        </h3>
                        <img height="100px" src="/images/album.png" />
                        <p className="author-name">by {mix.username}</p>
                    </div>
                ))}
            </div>
            <iframe
                className="player"
                src={currentTrack}
                width="100%"
                height="90"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    );
}
