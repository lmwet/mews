import { Link } from "react-router-dom";
import axios from "./axios";
import React, { useEffect, useState } from "react";

export default function MyPlaylists() {
    // either u write props or the properties names themselves in {}
    const [code, setCode] = useState("");

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/user.json");
            console.log(`code in get user`, data);
            setCode(data);
        })();
    }, []);

    console.log("code in PL", code);

    return (
        <React.Fragment>
            <h2>My Mixtapes</h2>
            <div id="pl-form"></div>
        </React.Fragment>
    );
}
