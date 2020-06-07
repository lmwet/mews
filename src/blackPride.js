import React, { useState } from "react";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function BlackPride() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    const artists = [
        {
            name: "simbo",
            engTitle: "Little Simz",
            arabicTitle: "",
            imgUrl: "/images/simbo.jpg",
            get: "/simbo.json",
        },
        {
            name: "muthoni",
            engTitle: "Muthoni Drummer Queen",
            arabicTitle: "",
            imgUrl: "/images/muthoni.jpg",
            get: "/muthoni.json",
        },
        {
            name: "hawa",
            engTitle: "Hawa Boussim",
            arabicTitle: "",
            imgUrl: "/images/hawa.jpg",
            get: "/hawa.json",
        },
        {
            name: "akua",
            engTitle: "Akua Naru ",
            arabicTitle: "",
            imgUrl: "/images/akua.png",
            get: "/akua.json",
        },
        {
            name: "kanyi",
            engTitle: "Kanyi",
            arabicTitle: "",
            imgUrl: "/images/kanyi.jpg",
            get: "/kanyi.json",
        },
        {
            name: "bia",
            engTitle: "Bia Ferreira",
            arabicTitle: "",
            imgUrl: "/images/bia.jpg",
            get: "/bia.json",
        },
        {
            name: "angelique",
            engTitle: "Angelique Kidjo",
            arabicTitle: "",
            imgUrl: "/images/angelique.jpg",
            get: "/angelique.json",
        },
        {
            name: "jamila",
            engTitle: "Jamila Woods",
            arabicTitle: "",
            imgUrl: "/images/jamila.png",
            get: "/jamila.json",
        },
        {
            name: "sampa",
            engTitle: "Sampa The Great",
            arabicTitle: "",
            imgUrl: "/images/sampa.jpg",
            get: "/sampa.json",
        },
        {
            name: "lous",
            engTitle: "Lous & The Yakuza",
            arabicTitle: "",
            imgUrl: "/images/lous.jpg",
            get: "/lous.json",
        },
        {
            name: "lizzo",
            engTitle: "Lizzo",
            arabicTitle: "",
            imgUrl: "/images/lizzo.jpg",
            get: "/lizzo.json",
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
        <div className="component-container">
            <img id="nothing" src="/images/nothing.png" />
            <h1 className="cpnt-title">Black and African Prides</h1>

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
                width="102%"
                height="90"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    );
}
