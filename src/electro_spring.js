import React, { useEffect, useState } from "react";
import usePlay from "./hooks/usePlay";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function ElectroSpring() {
    const [currentTrack, setCurrentTrack] = useState("");
    // const [addedTrack, setAddedTrack] = useState({});
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    console.log("newPlaylist outside func", newPlaylist);

    // useEffect(() => {
    //     console.log("newPlaylistin useEffect", addedTrack);
    // }, [addedTrack]);

    const artists = [
        {
            name: "aya",
            engTitle: "Aya Metwalli",
            arabicTitle: "آية متولّي",
            imgUrl: "/images/aya_metwalli.jpeg",
            get: "/aya.json",
        },
        {
            name: "mariam",
            engTitle: "Mariam Saleh",
            arabicTitle: "مريم صالح",
            imgUrl: "/images/mariam_saleh.jpg",
            get: "/mariam.json",
        },
        {
            name: "emel",
            engTitle: "Emel Mathlouthi",
            arabicTitle: "آمال المثلوثي",
            imgUrl: "/images/brujas.jpg",
            get: "/emel.json",
        },
        {
            name: "maii",
            engTitle: "Maii Waleed",
            arabicTitle: "آية متولّي",
            imgUrl: "/images/maii_walled.jpg",
            get: "/maii.json",
        },
        {
            name: "yasmine",
            engTitle: "Yasmine Hamdan",
            arabicTitle: "ياسمين حمدان",
            imgUrl: "/images/yasmine.png",
            get: "/yasmine.json",
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
            <h1>Arab Electronic@s </h1>
            <h2>إلكترونيات</h2>

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
