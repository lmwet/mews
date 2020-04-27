import React, { useEffect, useState } from "react";
import usePlay from "./hooks/usePlay";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function DevilDykes() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [addedTrack, setAddedTrack] = useState("");
    const [showModal, setShowmodal] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState([]);

    const artists = [
        {
            name: "trumpet",
            engTitle: "Trumpet Grrrl",
            arabicTitle: "",
            imgUrl: "/images/trumpetGrl.jpg",
            get: "/trumpet.json",
        },
        {
            name: "saye",
            engTitle: "Säye Skye",
            arabicTitle: "",
            imgUrl: "/images/saye.jpg",
            get: "/saye.json",
        },
        {
            name: "koffee",
            engTitle: "Koffee",
            arabicTitle: "",
            imgUrl: "/images/koffee.jpg",
            get: "/koffee.json",
        },
        {
            name: "ipek",
            engTitle: "Ipek Ipekçioğlu",
            arabicTitle: "",
            imgUrl: "/images/ipek.jpg",
            get: "/ipek.json",
        },
        {
            name: "cassia",
            engTitle: "Cássia Eller",
            arabicTitle: "",
            imgUrl: "/images/cassia.jpg",
            get: "/cassia.json",
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
        const elem = e.target;
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("album", "embed/album");
        setCurrentTrack(embedUrl);
    };

    const addToPlaylist = (e) => {
        e.preventDefault();

        // setPlaylistIsVisible(true);

        const elem = e.target;
        //we take the uri from the data
        let songUri = elem.getAttribute("href");
        console.log("addedSongUri", songUri);

        let songTitle = elem.parentNode.childNodes[1].innerText;
        console.log("songTitle", songTitle);

        setAddedTrack({ songTitle, songUri });
        console.log("addedTrack", addedTrack);

        setNewPlaylist((newPlaylist) => [...newPlaylist, addedTrack]);
        console.log("newPlaylist", newPlaylist);
    };

    const toggle = () => setShowmodal(true);
    const toggleBack = () => {
        setShowmodal(false), console.log("toggleback running");
    };

    return (
        <div>
            <h3>Devil Dykes</h3>

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
