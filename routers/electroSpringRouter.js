const express = require("express");
const electroSpringRouter = express.Router();

const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});

electroSpringRouter.get("/mariam.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "3M3dqhDqNK2DsZPIbopgUA",
            "DE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in mariam",
            err.message
        );
    }
});

electroSpringRouter.get("/aya.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "0Od49f50ljr4kmQgclwHkm",
            "EG"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in aya",
            err.message
        );
    }
});

electroSpringRouter.get("/emel.json", async (req, res) => {
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

electroSpringRouter.get("/maii.json", async (req, res) => {
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

electroSpringRouter.get("/yasmine.json", async (req, res) => {
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

electroSpringRouter.get("/nawel.json", async (req, res) => {
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

electroSpringRouter.get("/badiaa.json", async (req, res) => {
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

module.exports = electroSpringRouter;
