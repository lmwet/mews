import React, { useEffect, useState } from "react";
import usePlay from "./hooks/usePlay";
import ArtistCard from "./artist-card";
import Defile from "./defile";
import MyPlaylists from "./myPlaylists";

export default function Wilad() {
    const [currentTrack, setCurrentTrack] = useState("");
    const [newPlaylist, setNewPlaylist] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    // const artists = [
    //     {
    //         name: "leila",
    //         engTitle: "Chavela Vargas",
    //         arabicTitle: "",
    //         imgUrl: "/images/chavela.jpeg",
    //         get: "/chavela.json",
    //     },
    //     {
    //         name: "nakhane",
    //         engTitle: "Oum Kalthoum",
    //         arabicTitle: " ام كلثوم",
    //         imgUrl: "/images/oumkalthoum.jpg",
    //         get: "/oumkalthoum.json",
    //     },
    //     {
    //         name: "mujuice",
    //         engTitle: "Zemfira",
    //         arabicTitle: "Земфира",
    //         imgUrl: "/images/zemfira.jpg",
    //         get: "/zemfira.json",
    //     },
    //     {
    //         name: "kiddy",
    //         engTitle: "Colette Magny",
    //         arabicTitle: "",
    //         imgUrl: "/images/colette.jpg",
    //         get: "/colette.json",
    //     },
    // ];

    // const handleclick = (e) => {
    //     e.preventDefault();
    //     // playerIsVisible = true;
    //     const elem = e.target;
    //     let url = elem.getAttribute("href");
    //     const embedUrl = url.replace("track", "embed/track");
    //     setCurrentTrack(embedUrl);
    // };

    // const playAlbum = (e) => {
    //     e.preventDefault();
    //     console.log("playalbum running");
    //     const elem = e.target;
    //     let url = elem.getAttribute("href");
    //     const embedUrl = url.replace("album", "embed/album");
    //     setCurrentTrack(embedUrl);
    // };

    // const addToPlaylist = async (e) => {
    //     e.preventDefault();

    //     const elem = e.target;
    //     let songUri = elem.getAttribute("href");
    //     console.log("addedSongUri", songUri);

    //     let songTitle = elem.parentNode.childNodes[1].innerText;
    //     console.log("songTitle", songTitle);

    //     await setNewPlaylist((newPlaylist) => [
    //         ...newPlaylist,
    //         { songTitle, songUri },
    //     ]);
    //     console.log("newPlaylist", newPlaylist);
    // };

    // const toggle = () => setShowmodal(true);
    // const toggleBack = () => {
    //     setShowmodal(false), console.log("toggleback running");
    // };

    return (
        <React.Fragment>
            <h1 className="cpnt-title">Children of the Night</h1>
            <h2>أولاد الليل</h2>

            {/* <Defile artists={artists} />

            <div className="mix-toggle">
                <input id="mix" type="submit" value="My Mix" onClick={toggle} />
                {showModal ? (
                    <MyPlaylists
                        newPlaylist={newPlaylist}
                        toggleBack={toggleBack}
                    />
                ) : null}
            </div> */}
            {/* <a title="back-to-top" className="to-top" href="devil-dykes">
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
            ))} */}

            {/* <iframe
                className="player"
                src={currentTrack}
                width="100%"
                height="90"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe> */}
        </React.Fragment>
    );
}
