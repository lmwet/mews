import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "./axios";

export default function ElectroSpring() {
    // const elemRef = useRef();
    const [songsMS, setSongsMariamSaleh] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/kahrabiat.json`);
            console.log("data in get kahrabiat", data);
            setSongsMariamSaleh(data);
        })();
    }, []);

    const mariam = useSelector((state) => state && state.mariam);

    return (
        <div>
            <h2>Arab Electronic@s | إلكترونيات</h2>

            <div className="artist-container">
                <h3>Mariam Saleh | مريم صالح</h3>
                {songsMS &&
                    songsMS.map((song, index) => {
                        return (
                            <div className="song-div" key={index}>
                                <img
                                    className="song-pic"
                                    src={song.album.images[2].url}
                                />
                                <p className="author">{song.artists[0].name}</p>
                                <a href={song.external_urls}>
                                    <p>{song.name}</p>
                                </a>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
} //closes cpnt
