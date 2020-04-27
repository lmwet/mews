import React, { useEffect, useState } from "react";
import usePlay from "./hooks/usePlay";
import MyPlaylists from "./myPlaylists";

export default function Jukebox(newPlaylist) {
    const [currentTrack, setCurrentTrack] = useState("");
    const [playlists, setPlaylists] = useState([]);
    const [showModal, setShowmodal] = useState(false);

    useEffect(() => {
        console.log("newPlaylist in PL cpnt", newPlaylist);

        //get uri of playlisys from db
        // (async () => {
        //     const { data } = await axios.get("/user.json");
        //     console.log(`code in get user`, data);
        //     setPlaylists(data);
        // })();
    }, [newPlaylist, playlists]);

    // const playMix = (e) => {
    //     e.preventDefault();
    //     console.log("playalbum running");
    //     const elem = e.target;
    //     console.log(elem);
    //     let url = elem.getAttribute("href");
    //     console.log(url);

    //     const embedUrl = url.replace("playlist", "embed/playlist");
    //     console.log(embedUrl);
    //     setCurrentTrack(embedUrl);
    // };

    const toggle = () => setShowmodal(true);
    const toggleBack = () => {
        setShowmodal(false), console.log("toggleback running");
    };

    return (
        <div>
            <h1>The Jukebox </h1>

            <div className="mix-toggle">
                <input id="mix" type="submit" value="My Mix" onClick={toggle} />
                {showModal ? (
                    <MyPlaylists
                        // newPlaylist={newPlaylist}
                        toggleBack={toggleBack}
                    />
                ) : null}
            </div>

            {/* {playlists.map((mix) => (
                <div key={mix.id} className="container">
                    <div className="row">
                        <div className="col">
                            <a
                                onClick={playMix}
                                href={mix.external_urls.spotify}
                            >
                                <h3 className="mix-name">chill misc</h3>
                                <p className="author-name">by lmwet</p>
                            </a>
                            <img src="album.png" />
                        </div>
                    </div>
                </div>
            ))} */}
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
