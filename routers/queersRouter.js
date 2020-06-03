const express = require("express");
const queersRouter = express.Router();

const SpotifyWebApi = require("spotify-web-api-node");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID || process.env.CLIENT_ID,
    clientSecret: CLIENT_SECRET || process.env.CLIENT_SECRET,
    redirectUri: REDIRECT_URI || process.env.REDIRECT_URI,
});

queersRouter.get("/saye.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "2bXh3vsmLwmFrp9U7vitGU",
            "DE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in saye",
            err.message
        );
    }
});

queersRouter.get("/linn.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "5gGBopc7iw8yLqwxfPIv3t",
            "BR"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in linn",
            err.message
        );
    }
});

queersRouter.get("/planning.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "7qHOphlWaJrfFa0BqpayDG",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in planning",
            err.message
        );
    }
});

queersRouter.get("/mykki.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "2tSv9mEQSuNVMGr9qjYfkr",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in mykki",
            err.message
        );
    }
});

queersRouter.get("/rae.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "507TICFblljsw2Nbk7wXbx",
            "CA"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in rae",
            err.message
        );
    }
});
module.exports = queersRouter;
