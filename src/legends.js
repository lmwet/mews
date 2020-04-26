import React, { useEffect, useState } from "react";
import usePlay from "./hooks/usePlay";
import ArtistCard from "./artist-card";
import Defile from "./defile";

export default function Legends() {
    const [currentTrack, setCurrentTrack] = useState("");

    const artists = [
        {
            name: "chavela",
            engTitle: "Chavela Vargas",
            arabicTitle: "",
            imgUrl: "/images/chavela.jpeg",
            get: "/chavela.json",
        },
        {
            name: "umkalthoum",
            engTitle: "Oum Kalthoum",
            arabicTitle: " ام كلثوم",
            imgUrl: "/images/oumkalthoum.jpg",
            get: "/oumkalthoum.json",
        },
        {
            name: "zemfira",
            engTitle: "Zemfira",
            arabicTitle: "Земфира",
            imgUrl: "/images/zemfira.jpg",
            get: "/zemfira.json",
        },
        {
            name: "colette",
            engTitle: "Colette Magny",
            arabicTitle: "",
            imgUrl: "/images/colette.jpg",
            get: "/colette.json",
        },
        {
            name: "joan",
            engTitle: "Joan Armatrading",
            arabicTitle: "",
            imgUrl: "/images/joan.jpg",
            get: "/joan.json",
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
            <h1>Queer Legends</h1>

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

//engTitle={artist.engTitle} ArabicTitle={artist.arabicTitle} imgUrl={artist.imgUrl} get={artist.get}
