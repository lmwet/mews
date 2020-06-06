import React, { useEffect, useState } from "react";
import axios from "./axios";

export default function Rocket() {
    const [artistsArray, setArtistsArray] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("/artists");

                setArtistsArray(data[0].rows);
                console.log("artistsArray", artistsArray);
            } catch (e) {
                console.log("err in get /artists", e);
            }
        })();
    }, []);

    const item = artistsArray[Math.floor(Math.random() * artistsArray.length)];
    console.log("item", item);

    const buildLink = (e) => {
        e.preventDefault;
        let url = "https://m-e-w-s.herokuapp.com/category#artist";
        const randomUrl = url.replace("category#artist", item.path);
        console.log("randomUrl", randomUrl);

        document.getElementById("random-link").href = randomUrl;
    };

    return (
        <React.Fragment>
            <a id="random-link" onClick={buildLink} href="#">
                <img id="patch" src="/images/patch.png" />
            </a>
        </React.Fragment>
    );
}
