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
            web: "http://www.calypso-rose.com/",
        },
        {
            name: "lena",
            engTitle: "Lena Chamamyan",
            arabicTitle: "لينا شاماميان  ",
            imgUrl: "/images/lena.jpg",
            get: "/lena.json",
            web: "https://lenachamamyan.org",
        },
        {
            name: "phew",
            engTitle: "Phew",
            arabicTitle: "",
            imgUrl: "/images/phew.jpg",
            get: "/phew.json",
            web: "https://phew.stores.jp/about",
        },
        {
            name: "gaelynn",
            engTitle: "Gaelynn Lea",
            arabicTitle: "",
            imgUrl: "/images/gaelinn.jpg",
            get: "/gaelynn.json",
            web: "https://violinscratches.com/",
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
            name: "emel",
            engTitle: "Emel Mathlouthi",
            arabicTitle: "آمال المثلوثي",
            imgUrl: "/images/brujas.jpg",
            get: "/emel.json",
            web: "https://emelmathlouthi.com/",
        },
        {
            name: "tierra",
            engTitle: "Tierra Whack",
            arabicTitle: "",
            imgUrl: "/images/tierra.jpg",
            get: "/tierra.json",
            web: "https://en.wikipedia.org/wiki/Tierra_Whack",
        },
        {
            name: "jun",
            engTitle: "Jun Togawa",
            arabicTitle: "戸川 純",
            imgUrl: "/images/jun.jpg",
            get: "/jun.json",
            web: "http://juntogawa.org/en/jun-togawa/",
        },
        {
            name: "teyana",
            engTitle: "Teyana Taylor",
            arabicTitle: "",
            imgUrl: "/images/teyana.jpg",
            get: "/teyana.json",
            web: "www.teyanataylor.com",
        },
        {
            name: "ikue",
            engTitle: "Ikue Asazaki",
            arabicTitle: "朝崎 郁恵",
            imgUrl: "/images/ikue.jpg",
            get: "/ikue.json",
            web: "http://asazakiikue.com/",
        },
        {
            name: "choral",
            engTitle: "Choral Hearse",
            arabicTitle: "",
            imgUrl: "/images/choral.jpg",
            get: "/choral.json",
            web: "https://www.facebook.com/choralhearse/",
        },
        {
            name: "dina",
            engTitle: "Dina El Wedidi ",
            arabicTitle: "دينا الوديدي‎",
            imgUrl: "/images/dina.jpg",
            get: "/dina.json",
            web: "https://dinaelwedidi.com/",
        },
        {
            name: "takako",
            engTitle: "Takako Minekawa",
            arabicTitle: "",
            imgUrl: "/images/takako.jpg",
            get: "/takako.json",
            web: "",
        },
        {
            name: "lido",
            engTitle: "Lido Pimienta",
            arabicTitle: "",
            imgUrl: "/images/lido.jpg",
            get: "/lido.json",
            web: "https://lidopimienta.com/about",
        },
        {
            name: "zakiya",
            engTitle: "Zakiya Hamdan",
            arabicTitle: " زكيّة حمدان",
            imgUrl: "/images/zakiya.jpeg",
            get: "/zakiya.json",
            web: "https://www.facebook.com/naghamsound/posts/2845557655713805",
        },
        {
            name: "luzmila",
            engTitle: "Luzmila Carpio",
            arabicTitle: "",
            imgUrl: "/images/luzmila.jpg",
            get: "/luzmila.json",
            web: "https://www.luzmilacarpio.tv/",
        },
        {
            name: "masu",
            engTitle: "Mass of the Fermenting Dregs",
            arabicTitle: "マス オブ ザ ファーメンティング ドレッグス",
            imgUrl: "/images/masu.jpg",
            get: "/masu.json",
            web: "https://www.motfd.com/",
        },
        {
            name: "mariem",
            engTitle: "Mariem Hassan",
            arabicTitle: "مريم حسن",
            imgUrl: "/images/mariem.jpg",
            get: "/mariem.json",
            web: "https://en.wikipedia.org/wiki/Mariem_Hassan",
        },
        {
            name: "aziza",
            engTitle: "Aziza Brahim",
            arabicTitle: " عزيزة ابراهيم",
            imgUrl: "/images/aziza.jpg",
            get: "/aziza.json",
            web: "http://azizabrahim.com/",
        },
        {
            name: "ahmerahsu",
            engTitle: "Ah-Mer-Ah-Su",
            arabicTitle: "",
            imgUrl: "/images/ahmerahsu.jpg",
            get: "/ahmerahsu.json",
            web: "https://www.facebook.com/AhMerAhSu/",
        },
        {
            name: "tami",
            engTitle: "Tami T",
            arabicTitle: "",
            imgUrl: "/images/tami.jpeg",
            get: "/tami.json",
            web: "https://www.tamimusic.com/",
        },
        {
            name: "rosinha",
            engTitle: "Rosinha de Valença",
            arabicTitle: "",
            imgUrl: "/images/rosinha.jpg",
            get: "/rosinha.json",
            web: "https://en.wikipedia.org/wiki/Rosinha_de_Valen%C3%A7a",
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
            <a title="back-to-top" className="to-top" href="xodade">
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
