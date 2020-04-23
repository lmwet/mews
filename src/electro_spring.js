import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "./axios";

const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});

export default function ElectroSpring() {
    // const elemRef = useRef();
    const [songs, setArtistsSongs] = useState([]);

    // const mariam = useSelector((state) => state && state.mariam);

    useEffect(() => {}, []);

    return (
        <div>
            <h2>Arab Electronic@s - إلكترونيات</h2>
        </div>
    );
} //closes cpnt
