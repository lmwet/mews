import React, { useEffect, useState } from "react";
import usePlay from "./hooks/usePlay";
import ArtistCard from "./artist-card";
import Defile from "./defile";

export default function ElectroSprint() {
    const [currentTrack, setCurrentTrack] = useState("");

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

    return (
        <div>
            <h1>Arab Electronic@s </h1>
            <h2>إلكترونيات</h2>
            <Defile artists={artists} />

            {artists.map((artist) => (
                <ArtistCard
                    artist={artist}
                    key={artist.name}
                    handleclick={(e) => handleclick(e)}
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
