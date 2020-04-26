import React, { useEffect, useState } from "react";
import usePlay from "./hooks/usePlay";
import ArtistCard from "./artist-card";
import Defile from "./defile";

export default function DevilDykes() {
    const [currentTrack, setCurrentTrack] = useState("");

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
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("album", "embed/album");
        setCurrentTrack(embedUrl);
    };

    return (
        <div>
            <h3>Devil Dykes</h3>

            <Defile artists={artists} />

            {artists.map((artist) => (
                <ArtistCard
                    artist={artist}
                    key={artist.name}
                    handleclick={(e) => handleclick(e)}
                    playAlbum={(e) => playAlbum(e)}
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
