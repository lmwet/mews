import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "./axios";

export default function ElectroSpring() {
    // const elemRef = useRef();
    const [songsMS, setSongsMariamSaleh] = useState([]);
    const [songsAya, setSongsAya] = useState([]);
    const [songsMaii, setSongsMaii] = useState([]);
    const [songsEmel, setSongsEmel] = useState([]);
    const [currentTrack, setCurrentTrack] = useState("");
    const [handleclick] = usePlay(e);
    const playerIsVisible = true;

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/mariam.json`);
            console.log("data in get mariam", data);
            setSongsMariamSaleh(data);
        })();
        (async () => {
            const { data } = await axios.get(`/aya.json`);
            console.log("data in get aya", data);
            setSongsAya(data);
        })();
        (async () => {
            const { data } = await axios.get(`/emel.json`);
            console.log("data in get emel", data);
            setSongsEmel(data);
        })();
        (async () => {
            const { data } = await axios.get(`/maii.json`);
            console.log("data in get maii", data);
            setSongsMaii(data);
        })();
    }, []);

    const handleclick = (e) => {
        e.preventDefault();
        const elem = e.target;
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("track", "embed/track");
        setCurrentTrack(embedUrl);
    };

    return (
        <div>
            <h2>Arab Electronic@s إلكترونيات</h2>
            {images &&
                images.map((song, index) => {
                    return (
                        <div className="song-div" key={index}>
                            <img
                                className="song-pic"
                                src={song.album.images[2].url}
                            />
                            <p className="author">{song.artists[0].name}</p>
                            <a
                                onClick={handleclick}
                                className="spotify-url"
                                href={song.external_urls.spotify}
                            >
                                {song.name}
                            </a>
                        </div>
                    );
                })}

            {/* MARIAM SALEH */}
            <div className="artist-container">
                <div className="songs-container">
                    <h3>Mariam Saleh مريم صالح</h3>
                    {songsMS &&
                        songsMS.map((song, index) => {
                            return (
                                <div className="song-div" key={index}>
                                    <img
                                        className="song-pic"
                                        src={song.album.images[2].url}
                                    />
                                    <p className="author">
                                        {song.artists[0].name}
                                    </p>
                                    <a
                                        onClick={handleclick}
                                        className="spotify-url"
                                        href={song.external_urls.spotify}
                                    >
                                        {song.name}
                                    </a>
                                </div>
                            );
                        })}
                </div>
                <div className="artist-pic-wrapper">
                    <img
                        className="artict-pic"
                        src="/images/mariam_saleh.jpg"
                    />
                </div>
            </div>

            {/* AYA METWALLI */}
            <div className="artist-container">
                <div className="songs-container">
                    <h3>Aya Metwalli آية متولّي</h3>
                    {songsAya &&
                        songsAya.map((song, index) => {
                            return (
                                <div className="song-div" key={index}>
                                    <img
                                        className="song-pic"
                                        src={song.album.images[2].url}
                                    />
                                    <p className="author">
                                        {song.artists[0].name}
                                    </p>
                                    <a
                                        onClick={handleclick}
                                        className="spotify-url"
                                        href={song.external_urls.spotify}
                                    >
                                        {song.name}
                                    </a>
                                </div>
                            );
                        })}
                </div>
                <div className="artist-pic-wrapper">
                    <img
                        className="artist-pic"
                        src="/images/aya_metwalli.jpeg"
                    />
                </div>
            </div>

            {/* Emel Mathlouthi */}
            <div className="artist-container">
                <div className="songs-container">
                    <h3>Emel Mathlouthi آمال المثلوثي‎</h3>
                    {songsEmel &&
                        songsEmel.map((song, index) => {
                            return (
                                <div className="song-div" key={index}>
                                    <img
                                        className="song-pic"
                                        src={song.album.images[2].url}
                                    />
                                    <p className="author">
                                        {song.artists[0].name}
                                    </p>
                                    <a
                                        onClick={handleclick}
                                        className="spotify-url"
                                        href={song.external_urls.spotify}
                                    >
                                        {song.name}
                                    </a>
                                </div>
                            );
                        })}
                </div>
                <div className="artist-pic-wrapper">
                    <img className="artist-pic" src="/images/brujas.jpg" />
                </div>
            </div>

            {/* Maii Waleed */}
            {/* <div className="artist-container">
                <div className="songs-container">
                    <h3>Maii Waleed | مريم صالح</h3>
                    {songsMaii &&
                        songsMaii.map((song, index) => {
                            return (
                                <div className="song-div" key={index}>
                                    <img
                                        className="song-pic"
                                        src={song.album.images[2].url}
                                    />
                                    <p className="author">
                                        {song.artists[0].name}
                                    </p>
                                    <a
                                        onClick={handleclick}
                                        className="spotify-url"
                                        href={song.external_urls.spotify}
                                    >
                                        <p>{song.name}</p>
                                        <p className="play-button"> &#9658;</p>
                                    </a>
                                </div>
                            );
                        })}
                </div>
                <div className="artist-pic-wrapper">
                    <img className="artist-pic" src="/images/maii_walled.jpg" />
                </div>
            </div> */}

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
} //closes cpnt
