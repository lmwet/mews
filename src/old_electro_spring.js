import React, { useEffect, useState } from "react";
import axios from "./axios";
import usePlay from "./hooks/usePlay";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "./actions";

export default function ElectroSpring() {
    const dispatch = useDispatch();

    const [songsMS, setSongsMariamSaleh] = useState([]);
    const [songsAya, setSongsAya] = useState([]);
    const [songsMaii, setSongsMaii] = useState([]);
    const [songsEmel, setSongsEmel] = useState([]);
    const [currentTrack, setCurrentTrack] = useState("");
    // const [embedUrl, handleclick] = usePlay();
    // let playerIsVisible = false;

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
        (async () => {
            const { data } = await axios.post(`/images`);
            console.log("data in get maii", data);
            setSongsMaii(data);
        })();

        const images = document.querySelectorAll(".artist-pic");
        dispatch(getImages(images));
        console.log("images", images);

        // axios
        //     .post("/images", images)
        //     .then((res) => {
        //         if (res.data[1].success) {
        //             self.setState({
        //                 currentBio: res.data[0],
        //             });
        //             self.checkBioState();
        //         }
        //     })
        //     .catch(function (err) {
        //         console.log("err in get /bio", err);
        //     });
    }, []);

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
            {/* <Defile  setNewImages={(bioInput) => props.setBio(bioInput)}/> */}
            <h1>Arab Electronic@s </h1>
            <h2>إلكترونيات</h2>
            {/* MARIAM SALEH */}
            <div id="mariam" className="artist-container">
                <div className="songs-container">
                    <h3>Mariam Saleh </h3>
                    <h2>مريم صالح</h2>
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
                        className="artist-pic"
                        src="/images/mariam_saleh.jpg"
                        alt="Mariam Saleh"
                    />
                </div>
            </div>
            {/* AYA METWALLI */}
            <div id="aya" className="artist-container">
                <div className="songs-container">
                    <h3>Aya Metwalli </h3>
                    <h2>آية متولّي</h2>
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
                        alt="Aya Metwalli"
                    />
                </div>
            </div>
            {/* Emel Mathlouthi */}
            <div id="emel" className="artist-container">
                <div className="songs-container">
                    <h3>Emel Mathlouthi</h3>
                    <h2>آمال المثلوثي‎</h2>
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
            <div id="maii" className="artist-container">
                <div className="songs-container">
                    <h3>Maii Waleed</h3>
                    <h2>مريم صالح</h2>
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
                    <img
                        className="artist-pic"
                        src="/images/maii_walled.jpg"
                        alt="Maii Waleed"
                    />
                </div>
            </div>
            {/* {playerIsVisible && ( */}
            <iframe
                className="player"
                src={currentTrack}
                width="100%"
                height="90"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
            {/* )} */};
        </div>
    );
} //closes cpnt
