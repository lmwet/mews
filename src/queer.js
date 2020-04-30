import React, { useState } from "react";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function Queer() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    const artists = [
        {
            name: "linn",
            engTitle: "Linn de Quebrada",
            arabicTitle: "",
            imgUrl: "/images/linn.jpg",
            get: "/linn.json",
        },
        {
            name: "planning",
            engTitle: "Planning To Rock",
            arabicTitle: "",
            imgUrl: "/images/planning.jpg",
            get: "/planning.json",
        },
        {
            name: "mykki",
            engTitle: "Mykki Blanco",
            arabicTitle: "",
            imgUrl: "/images/mykkie.jpg",
            get: "/mykki.json",
        },
        {
            name: "saye",
            engTitle: "Säye Skye",
            arabicTitle: "",
            imgUrl: "/images/saye.jpg",
            get: "/saye.json",
        },
        {
            name: "rae",
            engTitle: "Rae Spoon",
            arabicTitle: "",
            imgUrl: "/images/rae.jpg",
            get: "/rae.json",
        },
    ];

    const handleclick = (e) => {
        e.preventDefault();
        // playerIsVisible = true;
        const elem = e.target;
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("track", "embed/track");
        setCurrentTrack(embedUrl);
    };

    const playAlbum = (e) => {
        e.preventDefault();
        console.log("playalbum running");
        const elem = e.target;
        console.log(elem);
        let url = elem.getAttribute("href");
        console.log(url);

        const embedUrl = url.replace("album", "embed/album");
        console.log(embedUrl);
        setCurrentTrack(embedUrl);
    };

    const addToPlaylist = async (e) => {
        e.preventDefault();

        const elem = e.target;
        let songUri = elem.getAttribute("href");
        console.log("addedSongUri", songUri);

        let songTitle = elem.parentNode.childNodes[1].innerText;
        console.log("songTitle", songTitle);

        await setNewPlaylist((newPlaylist) => [
            ...newPlaylist,
            { songTitle, songUri },
        ]);
        console.log("newPlaylist", newPlaylist);
    };

    const toggle = () => setShowmodal(true);
    const toggleBack = () => {
        setShowmodal(false);
    };

    return (
        <div>
            <h1 className="cpnt-title">Queer F***ing Gender </h1>
            <h2></h2>

            <Defile artists={artists} />

            <div className="mix-toggle">
                <input id="mix" type="submit" value="My Mix" onClick={toggle} />
                {showModal ? (
                    <MyPlaylists
                        newPlaylist={newPlaylist}
                        toggleBack={toggleBack}
                    />
                ) : null}
            </div>

            <a title="back-to-top" className="to-top" href="devil-dykes">
                <span className="glyphicon glyphicon-chevron-up"></span>
            </a>

            {artists.map((artist) => (
                <ArtistCard
                    artist={artist}
                    key={artist.name}
                    handleclick={(e) => handleclick(e)}
                    playAlbum={(e) => playAlbum(e)}
                    addToPlaylist={(e) => addToPlaylist(e)}
                />
            ))}

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
