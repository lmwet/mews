import React, { useState } from "react";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function Femihip() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    const artists = [
        {
            name: "soultana",
            engTitle: "Soultana",
            arabicTitle: "سلطانة",
            imgUrl: "/images/soultana.jpg",
            get: "/soultana.json",
            web: "#",
        },
        {
            name: "sara",
            engTitle: "Sara Hebe",
            arabicTitle: "",
            imgUrl: "/images/sara.jpg",
            get: "/sara.json",
            web: "https://www.instagram.com/sara_hebe/",
        },
        {
            name: "ebow",
            engTitle: "Ebow",
            arabicTitle: "",
            imgUrl: "/images/ebow.jpg",
            get: "/ebow.json",
            web: "http://www.ebow4life.net/",
        },
        {
            name: "yugen",
            engTitle: "Yugen Blakrok",
            arabicTitle: "",
            imgUrl: "/images/yugen.jpg",
            get: "/yugen.json",
            web: "https://www.facebook.com/YugenBlakrok/?_rdc=1&_rdr",
        },
        {
            name: "kanyi",
            engTitle: "Kanyi",
            arabicTitle: "",
            imgUrl: "/images/kanyi.jpg",
            get: "/kanyi.json",
            web: "https://www.facebook.com/kanyimavi/",
        },
        {
            name: "rap",
            engTitle: "Rap Plus Size",
            arabicTitle: "",
            imgUrl: "/images/rap.jpg",
            get: "/rap.json",
            web: "https://www.facebook.com/RapPlusSize/",
        },
        {
            name: "shadia",
            engTitle: "Shadia Mansour",
            arabicTitle: " شادية منصور ",
            imgUrl: "/images/shadia.jpg",
            get: "/shadia.json",
            web: "https://myspace.com/shadiamusic",
        },
        {
            name: "tic",
            engTitle: "Tic Tac Toe",
            arabicTitle: "",
            imgUrl: "/images/tic.jpg",
            get: "/tic.json",
            web: "https://en.wikipedia.org/wiki/Tic_Tac_Toe_(band)",
        },
        {
            name: "malikah",
            engTitle: "Malikah",
            arabicTitle: "ملكة ‎",
            imgUrl: "/images/malikah.jpg",
            get: "/malikah.json",
            web: "https://www.facebook.com/MALIKAH961MUSIC",
        },
        {
            name: "mare",
            engTitle: "Mare Advertencia Lirika",
            arabicTitle: " ",
            imgUrl: "/images/mare.jpg",
            get: "/mare.json",
            web: "https://www.facebook.com/mare.advertencia.lirika.official",
        },
        {
            name: "ntsiki",
            engTitle: "Ntsiki Mazwai ",
            arabicTitle: "",
            imgUrl: "/images/ntsiki.png",
            get: "/ntsiki.json",
            web: "https://www.ntsikimazwai.com/",
        },
        {
            name: "casey",
            engTitle: "Casey",
            arabicTitle: "",
            imgUrl: "/images/casey.jpg",
            get: "/casey.json",
            web: "#",
        },
        {
            name: "felukah",
            engTitle: "Felukah",
            arabicTitle: "فلوكه",
            imgUrl: "/images/felukah.jpg",
            get: "/felukah.json",
            web: "https://www.felukah.com/",
        },
        {
            name: "quay",
            engTitle: "Quay Dash",
            arabicTitle: "",
            imgUrl: "/images/quay.jpg",
            get: "/quay.json",
            web: "https://www.facebook.com/quaydashmusic",
        },
        {
            name: "keny",
            engTitle: "Keny Arkana",
            arabicTitle: "",
            imgUrl: "/images/keny.jpg",
            get: "/keny.json",
            web: "www.keny-arkana.com",
        },
        {
            name: "kween",
            engTitle: "Kween G Kibone",
            arabicTitle: "",
            imgUrl: "/images/kween.jpg",
            get: "/kween.json",
            web: "https://kweenkibone.wixsite.com/website",
        },
        {
            name: "shay",
            engTitle: "Shay",
            arabicTitle: "",
            imgUrl: "/images/shay.png",
            get: "/shay.json",
            web: "https://www.facebook.com/Shayofficiel",
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
        <div>
            <h1 className="cpnt-title">Feminist Hip Hop</h1>
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
