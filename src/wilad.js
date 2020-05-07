import React, { useState } from "react";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function Wilad() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    const artists = [
        {
            name: "nakhane",
            engTitle: "Nakhane",
            arabicTitle: "",
            imgUrl: "/images/nakhane.jpg",
            get: "/nakhane.json",
        },
        {
            name: "leila",
            engTitle: "Mashrou3 Leila",
            arabicTitle: "مشروع ليلى",
            imgUrl: "/images/sinno.jpg",
            get: "/leila.json",
        },
        {
            name: "mujuice",
            engTitle: "Mujuice",
            arabicTitle: "Муджус",
            imgUrl: "/images/mujuice.jpg",
            get: "/mujuice.json",
        },
        {
            name: "kiddy",
            engTitle: "Kiddy Smile",
            arabicTitle: "",
            imgUrl: "/images/kiddy.jpg",
            get: "/kiddy.json",
        },
    ];

    const handleclick = (e) => {
        e.preventDefault();

        const elem = e.target;
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("track", "embed/track");
        setCurrentTrack(embedUrl);
    };

    const playAlbum = (e) => {
        e.preventDefault();
        console.log("playalbum running");
        const elem = e.target;
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("album", "embed/album");
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
        setShowmodal(false), console.log("toggleback running");
    };

    return (
        <React.Fragment>
            <h1 className="cpnt-title">Children of the Night</h1>
            <h2>أولاد الليل</h2>

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
            <a title="back-to-top" className="to-top" href="wilad">
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
        </React.Fragment>
    );
}
