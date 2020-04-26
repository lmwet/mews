const express = require("express");
const myPlaylistsRouter = express.Router();
const db = require("../utils/db.js");

const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});

myPlaylistsRouter.get("/user.json", async (req, res) => {
    // const code = await db.getCode();
    // try {
    //     res.json(topTen.body.tracks);
    // } catch (err) {
    //     console.log(
    //         "Unfortunately, something has gone wrong in mariam",
    //         err.message
    //     );
    // }
});

module.exports = myPlaylistsRouter;
