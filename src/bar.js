import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";useRef,
// import { useSelector } from "react-redux";
// import { socket } from "./socket";

// const elemRef = useRef();

useEffect(() => {
    // elemRef.current.scrollTop =
    //     elemRef.current.scrollHeight - elemRef.current.clientHeight;
}, []);

// const history = useSelector((state) => state && state.history);

// axios
//     .get("/bigmix")
//     .then((res) => {
//         console.log("res in get bigmix", res.data);

//         //extracting the links from the received data
//         let mix = res.data.map(function (item) {
//             return item["href"];
//         });
//         setMix(mix);
//     })
//     .catch(function (err) {
//         console.log("err in get /bigmix", err);
//     });

// const keyCheck = (e) => {
//     console.log("value", e.target.value);
//     console.log("value", e.key);
//     if (e.key == "Enter") {
//         e.preventDefault(); // prevent line down
//         // socket.emit("postedMsg", e.target.value);
//         e.target.value = ""; //CLEARING!
//     }
// };

{
    /* <div className="description-container">
                    <p className="label-description">
                        Write their name and short description if you like, or a
                        link from somewhere else for us to discover.{" "}
                    </p>

                    <textarea
                        id="description"
                        placeholder="Here post a comment to your track (name, artist...) or any non-spotify links"
                        onChange={addNewTrack}
                    ></textarea>
                    <button id="add2lineup">Post</button>
                </div> 

                  <div className="read-container" ref={elemRef}>
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
            </div>  */
}
