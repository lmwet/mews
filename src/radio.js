import axios from "./axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";useRef,
// import { useSelector } from "react-redux";
// import { socket } from "./socket";

export default function Radio() {
    // const [mix, setMix] = useState([]);

    // useEffect(() => {
    // const elemRef = useRef();

    // const history = useSelector((state) => state && state.history);

    useEffect(() => {
        axios
            .get("/bigmix")
            .then((res) => {
                console.log("res in get nigmix", res);
                setMix(res.data.rows);
            })
            .catch(function (err) {
                console.log("err in get /bigmix", err);
            });

        // elemRef.current.scrollTop =
        //     elemRef.current.scrollHeight - elemRef.current.clientHeight;
    }, []);

    const keyCheck = (e) => {
        console.log("value", e.target.value);
        console.log("value", e.key);
        if (e.key == "Enter") {
            e.preventDefault(); // prevent line down
            // socket.emit("postedMsg", e.target.value);
            e.target.value = ""; //CLEARING!
        }
    };

    const send = () => {
        const text = document.getElementById("text");
        // socket.emit("postedMsg", text.value);
        text.value = "";
    };

    return (
        <React.Fragment>
            <h1>The Radio</h1>
            <img className="radio-pic" height="100px" src="/images/radio.png" />

            <div className="write-container">
                <p className="label-linkbox">
                    Got a song to add to the Big Mix? Post a spotify link here
                    to add it up to the queue. (on spotify, click on the "..."
                    next to the track and select "copy song link") Your link
                    should look like this:
                    https://open.spotify.com/track/462NxL8bZEDNKQV8fCQ1Ks?si=QxAbCYpEQzq8iX2S9EkdBA
                    or like this:
                    https://open.spotify.com/album/462NxL8bZEDNKQV8fCQ1Ks?si=QxAbCYpEQzq8iX2S9EkdBA
                </p>
                <textarea
                    id="linkbox"
                    placeholder="Here post a spotify link"
                    onKeyDown={keyCheck}
                ></textarea>
            </div>
            <div className="write-container">
                <p className="label-description">
                    Write their name and short description if you like, or a
                    link from somewhere else for us to discover.{" "}
                </p>
                <textarea
                    id="description"
                    placeholder="Here post a comment to your track (name, artist...) or any non-spotify links"
                    onKeyDown={keyCheck}
                ></textarea>
                <button id="send" onClick={send}>
                    Add
                </button>
            </div>
            {/* <div className="read-container" ref={elemRef}>
                {messages &&
                    messages.map((msg, index) => {
                        return (
                            <div className="message-div" key={index}>
                                <Link to={`/user/${msg.sender_id}`}>
                                    <img className="msg-pic" src={msg.url} />
                                </Link>
                                <Link to={`/user/${msg.id}`}>
                                    <p className="message">
                                        {msg.first} {msg.last} : {msg.text}
                                    </p>
                                </Link>
                            </div>
                        );
                    })}
            </div> */}
            {/* <iframe
                className="player"
                src={mix}
                width="100%"
                height="90"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe> */}
        </React.Fragment>
    );
}
