import axios from "./axios";
import React, { useEffect, useState } from "react";

export default function ArtistCard({ artist }, { handleclick }) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(artist.get);
            console.log(`data in get ${artist.name}`, data);
            setSongs(data);
        })();
    }, []);

    return (
        <div id={artist.name} className="artist-container">
            <h3>{artist.engTitle}</h3>
            <h2>{artist.arabicTitle}</h2>

            {songs.map((song, index) => {
                return (
                    <div key={index} className="songs-container">
                        <div className="song-div">
                            <img
                                className="song-pic"
                                src={song.album.images[2].url}
                            />
                            <p className="author"> {song.artists[0].name}</p>
                            <a
                                onClick={handleclick}
                                className="spotify-url"
                                href={song.external_urls.spotify}
                            >
                                {song.name}
                            </a>
                        </div>
                    </div>
                );
            })}

            <div className="artist-pic-wrapper">
                <img
                    className="artist-pic"
                    src={artist.imgUrl}
                    alt={artist.engTitle}
                />
            </div>
        </div>
    );
}
