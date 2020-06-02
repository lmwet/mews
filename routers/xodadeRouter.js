const express = require("express");
const xodadeRouter = express.Router();

const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID || process.env.CLIENT_ID,
    clientSecret: CLIENT_SECRET || process.env.CLIENT_SECRET,
    redirectUri: REDIRECT_URI || process.env.REDIRECT_URI,
});

xodadeRouter.get("/rose.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "56QlZ0AFfkaaHyANLVkg5h",
            "SE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in rose",
            err.message
        );
    }
});

xodadeRouter.get("/lena.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "0LH01nWLQote2HIUL87BLc",
            "SY"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in lena",
            err.message
        );
    }
});

xodadeRouter.get("/yugen.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "3kv1Edgn5HlEWCuEKr1Y9x",
            "AU"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in yugen",
            err.message
        );
    }
});

xodadeRouter.get("/emel.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "06MtOym27ALcfdtVOsRcaA",
            "EG"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in emel",
            err.message
        );
    }
});

xodadeRouter.get("/maii.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "1kqQvcNxWvkzK55bwDvHGP",
            "EG"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in maii",
            err.message
        );
    }
});

xodadeRouter.get("/yasmine.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "5VElAWe58JiEzEl4vtjw7J",
            "LI"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in maii",
            err.message
        );
    }
});

xodadeRouter.get("/nawel.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "2FnT84XG3yKLIHEjheon9W",
            "SE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in nawel",
            err.message
        );
    }
});

xodadeRouter.get("/badiaa.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "4tA4OuKn0ZjJgf34cZBmoJ",
            "SE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in badiaa",
            err.message
        );
    }
});

module.exports = xodadeRouter;
