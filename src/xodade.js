import React, { useState } from "react";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function Xodade() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    const artists = [
        {
            name: "rose",
            engTitle: "Calypso Rose",
            arabicTitle: "",
            imgUrl: "/images/rose.png",
            get: "/rose.json",
        },
        {
            name: "lena",
            engTitle: "Lena Chamamyan",
            arabicTitle: "",
            imgUrl: "/images/lena.jpg",
            get: "/lena.json",
        },
        {
            name: "gaelynn",
            engTitle: "Gaelynn Lea",
            arabicTitle: "",
            imgUrl: "/images/gaelinn.jpg",
            get: "/gaelynn.json",
        },
        {
            name: "yugen",
            engTitle: "Yugen Blakrok",
            arabicTitle: "",
            imgUrl: "/images/yugen.jpg",
            get: "/yugen.json",
        },
        {
            name: "emel",
            engTitle: "Emel Mathlouthi",
            arabicTitle: "آمال المثلوثي",
            imgUrl: "/images/brujas.jpg",
            get: "/emel.json",
        },
        // {
        //     name: "ivy",
        //     engTitle: "Ivy Queen",
        //     arabicTitle: "",
        //     imgUrl: "/images/ivy.jpg",
        //     get: "/ivy.json",
        // },
        {
            name: "tierra",
            engTitle: "Tierra Whack",
            arabicTitle: "",
            imgUrl: "/images/tierra.jpg",
            get: "/tierra.json",
        },
        {
            name: "teyana",
            engTitle: "Teyana Taylor",
            arabicTitle: "",
            imgUrl: "/images/teyana.jpg",
            get: "/teyana.json",
        },
        {
            name: "ikue",
            engTitle: "Ikue Asazaki",
            arabicTitle: "朝崎 郁恵",
            imgUrl: "/images/ikue.jpg",
            get: "/ikue.json",
        },
        {
            name: "choral",
            engTitle: "Choral Hearse",
            arabicTitle: "",
            imgUrl: "/images/choral.jpg",
            get: "/choral.json",
        },
        {
            name: "masu",
            engTitle: "Mass of the Fermenting Dregs",
            arabicTitle: "マス オブ ザ ファーメンティング ドレッグス",
            imgUrl: "/images/masu.jpg",
            get: "/masu.json",
        },
        {
            name: "dina",
            engTitle: "Dina El Wedidi ",
            arabicTitle: "دينا الوديدي‎",
            imgUrl: "/images/dina.jpg",
            get: "/dina.json",
        },
        {
            name: "lido",
            engTitle: "Lido Pimienta",
            arabicTitle: "",
            imgUrl: "/images/lido.jpg",
            get: "/lido.json",
        },
        {
            name: "zakiya",
            engTitle: "Zakiya Hamdan",
            arabicTitle: " زكيّة حمدان",
            imgUrl: "/images/zakiya.jpg",
            get: "/zakiya.json",
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
            <h1 className="cpnt-title">Xodade</h1>
            <h2> </h2>

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
