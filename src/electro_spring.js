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

    return (
        <div>
            <h2>Arab Electronic@s | إلكترونيات</h2>

            {/* MARIAM SALEH */}
            <div className="artist-container">
                <div className="songs-container">
                    <h3>Mariam Saleh | مريم صالح</h3>
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
                                    <a href={song.external_urls}>
                                        <p>{song.name}</p>
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
                    <h3>Aya Metwalli| آية متولّي</h3>
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
                                    <a href={song.external_urls}>
                                        <p>{song.name}</p>
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
                    <h3>Emel Mathlouthi | آمال المثلوثي‎</h3>
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
                                    <a href={song.external_urls}>
                                        <p>{song.name}</p>
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
            <div className="artist-container">
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
                                    <a href={song.external_urls}>
                                        <p>{song.name}</p>
                                    </a>
                                </div>
                            );
                        })}
                </div>
                <div className="artist-pic-wrapper">
                    <img className="artist-pic" src="/images/maii_walled.jpg" />
                </div>
            </div>
        </div>
    );
} //closes cpnt
