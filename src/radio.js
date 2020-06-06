import axios from "./axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";useRef,
// import { useSelector } from "react-redux";
// import { socket } from "./socket";

export default function Radio() {
    const [mix, setMix] = useState([]);

    // const elemRef = useRef();

    // const history = useSelector((state) => state && state.history);

    useEffect(() => {
        axios
            .get("/bigmix")
            .then((res) => {
                console.log("res in get bigmix", res.data);

                //extracting the links from the received data
                let mix = res.data.map(function (item) {
                    return item["href"];
                });
                setMix(mix);
            })
            .catch(function (err) {
                console.log("err in get /bigmix", err);
            });

        // elemRef.current.scrollTop =
        //     elemRef.current.scrollHeight - elemRef.current.clientHeight;
    }, []);

    console.log("mix in cpnt", mix);

    // const keyCheck = (e) => {
    //     console.log("value", e.target.value);
    //     console.log("value", e.key);
    //     if (e.key == "Enter") {
    //         e.preventDefault(); // prevent line down
    //         // socket.emit("postedMsg", e.target.value);
    //         e.target.value = ""; //CLEARING!
    //     }
    // };

    const addNewTrack = async (e) => {
        console.log("value", e.target.value);
        const newTrack = e.target.value;
        await setMix((mix) => [...mix, newTrack]);
    };
    console.log("mix after add", mix);
    const createMix = (e) => {
        console.log("value", e.target.value);
    };

    //function addToMix = add new item to DB and create a new PL from mix + new item

    //function playRadio = getnewest mix from DB

    return (
        <React.Fragment>
            <h1>The Radio</h1>
            <img className="radio-pic" height="100px" src="/images/radio.png" />
            <div className="write-container">
                <div className="linkbox-container">
                    <h3 className="titel-linkbox">
                        Got a song to add to the Big Mix?{" "}
                    </h3>
                    <h3 className="titel-linkbox">Post a spotify link. </h3>

                    {/* <p className="label-linkbox">
                        {`
                        (on spotify, click on the "..." next to the track and
                        select "copy song link")\n
                        Your link should look like this:\n
                        
                            https://open.spotify.com/track/462NxL8bZEDNKQV8fCQ1Ks?si=QxAbCYpEQzq8iX2S9EkdBA\n
                     
                        or like this:\n
                      
                            https://open.spotify.com/album/462NxL8bZEDNKQV8fCQ1Ks?si=QxAbCYpEQzq8iX2S9EkdBA
                            \n
                        `}
                    </p> */}
                    <textarea
                        id="linkbox"
                        placeholder="Here post a spotify link"
                        onChange={addNewTrack}
                    ></textarea>
                    <button id="add2lineup" onClick={createMix}>
                        Add to the line-up
                    </button>
                    <img
                        className="radio-button"
                        title="play the radio"
                        height="100px"
                        src="/images/play.jpg"
                        // onClick={createMix}
                    />
                </div>

                <div className="description-container">
                    {/* <p className="label-description">
                        Write their name and short description if you like, or a
                        link from somewhere else for us to discover.{" "}
                    </p> */}

                    <textarea
                        id="description"
                        placeholder="Here post a comment to your track (name, artist...) or any non-spotify links"
                        // onChange={addNewTrack}
                    ></textarea>
                    <button id="add2lineup">Post</button>
                </div>
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
