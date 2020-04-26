import axios from "./axios";
import React, { useEffect, useState } from "react";

export default function ArtistCard({
    artist,
    handleclick,
    playAlbum,
    addToPlaylist,
}) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(artist.get);
            console.log(" from artists", data);
            setSongs(data);
        })();
    }, []);

    return (
        <div id={artist.name} className="artist-container">
            <div className="songs-container">
                <h3>{artist.engTitle}</h3>
                <h2>{artist.arabicTitle}</h2>

                {songs.map((song) => (
                    <div key={song.id} className="songs-pic-wrapper">
                        <img
                            className="song-pic"
                            src={song.album.images[2].url}
                        />
                        <div className="song-div">
                            <a
                                className="album"
                                onClick={playAlbum}
                                href={song.album.external_urls.spotify}
                            >
                                {song.album.name}
                            </a>
                            <a
                                className="song"
                                onClick={handleclick}
                                href={song.external_urls.spotify}
                            >
                                {song.name}
                            </a>
                            <a
                                className="add"
                                onClick={addToPlaylist}
                                href={song.uri}
                            >
                                +
                            </a>
                        </div>
                    </div>
                ))}
            </div>
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
