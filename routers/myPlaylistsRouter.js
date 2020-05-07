const express = require("express");
const myPlaylistsRouter = express.Router();
const db = require("../utils/db.js");

const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID || process.env.CLIENT_ID,
    clientSecret: CLIENT_SECRET || process.env.CLIENT_SECRET,
    redirectUri: REDIRECT_URI || process.env.REDIRECT_URI,
});

myPlaylistsRouter.get("/submit", async (req, res) => {
    try {
        // First retrieve an access token
        const uri = await spotifyApi.createAuthorizeURL(
            config.scope,
            "",
            config.showDialog
        );

        res.redirect(uri);
        const grant = await spotifyApi.authorizationCodeGrant(
            authorizationCode
        );
        console.log(grant);

        const token = await spotifyApi.setAccessToken(grant["access_token"]);

        console.log("token", token);

        // Create a playlist
        const data = await spotifyApi.createPlaylist(userName, newPlaylist);
        // playlistId = data.body["id"];
        console.log("createdPlaylist", data);
    } catch (err) {
        console.log("err in submit", err.message);
    }
});

module.exports = myPlaylistsRouter;
