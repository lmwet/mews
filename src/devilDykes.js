import React, { useState } from "react";
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
            engTitle: "Trumpet Wom",
            arabicTitle: "",
            imgUrl: "/images/trumpetGrl.jpg",
            get: "/trumpet.json",
            web: "https://www.trumpetwom.com/",
        },
        {
            name: "ipek",
            engTitle: "Ipek Ipekçioğlu",
            arabicTitle: "",
            imgUrl: "/images/ipek.jpg",
            get: "/ipek.json",
            web: "https://djipek.com/",
        },
        {
            name: "bia",
            engTitle: "Bia Ferreira",
            arabicTitle: "",
            imgUrl: "/images/bia.jpg",
            get: "/bia.json",
            web: "https://www.facebook.com/BiaFerreiraOficial/",
        },
        {
            name: "obinrin",
            engTitle: "Obinrin Trio",
            arabicTitle: "",
            imgUrl: "/images/obinrin.jpeg",
            get: "/obinrin.json",
            web: "https://www.facebook.com/ObinrinTrio/",
        },
        {
            name: "internet",
            engTitle: "The Internet",
            arabicTitle: "",
            imgUrl: "/images/internet.jpg",
            get: "/internet.json",
            web: "http://www.internet-band.com/",
        },
        {
            name: "beatrice",
            engTitle: "Beatrice Eli",
            arabicTitle: "",
            imgUrl: "/images/beatrice.jpg",
            get: "/beatrice.json",
            web: "https://beatriceeli.com/",
        },
        {
            name: "chika",
            engTitle: "Chika",
            arabicTitle: "",
            imgUrl: "/images/chika.jpg",
            get: "/chika.json",
            web: "https://www.officialchika.com/",
        },
        {
            name: "koffee",
            engTitle: "Koffee",
            arabicTitle: "",
            imgUrl: "/images/koffee.jpg",
            get: "/koffee.json",
            web: "https://www.originalkoffee.com/",
        },
        {
            name: "dory",
            engTitle: "Dory De Oliveira",
            arabicTitle: "",
            imgUrl: "/images/dory.jpg",
            get: "/dory.json",
            web: "https://www.facebook.com/dorydeoliveiraoficial/",
        },
        {
            name: "kumbia",
            engTitle: "Kumbia Queers",
            arabicTitle: "",
            imgUrl: "/images/kumbia.jpg",
            get: "/kumbia.json",
            web: "http://kumbiaqueers.com.ar/",
        },
        {
            name: "mansfield",
            engTitle: "Mansfield.TYA",
            arabicTitle: "",
            imgUrl: "/images/mansfield.jpg",
            get: "/mansfield.json",
            web: "https://www.facebook.com/Mansfield.TYAofficial/",
        },
        {
            name: "muthoni",
            engTitle: "Muthoni Drummer Queen",
            arabicTitle: "",
            imgUrl: "/images/muthoni.jpg",
            get: "/muthoni.json",
            web: "https://www.mdqmusic.com/",
        },
        {
            name: "chocolate",
            engTitle: "Chocolate Remix",
            arabicTitle: "",
            imgUrl: "/images/chocolate.jpg",
            get: "/chocolate.json",
            web: "https://www.facebook.com/chocolateremixoficial/",
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
            <h1 className="cpnt-title">Devil's Dykes </h1>
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
