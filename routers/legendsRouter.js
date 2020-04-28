const express = require("express");
const legendsRouter = express.Router();

const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});

legendsRouter.get("/colette.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "4cPC7jBIad7FWC01wUWTse",
            "FR"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in mariam",
            err.message
        );
    }
});

legendsRouter.get("/joan.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "1bdAJUX6JPsnYHbTl5jbk6",
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

legendsRouter.get("/oumkalthoum.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "52lsD82iOqGtyfEMqWgk4f",
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

legendsRouter.get("/zemfira.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "6oO3QiWdVj5FZQwbdRtsRh",
            "RU"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in maii",
            err.message
        );
    }
});

legendsRouter.get("/chavela.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "0WC6O2ZzUcDYvcmt2mGh8c",
            "SE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in maii",
            err.message
        );
    }
});

legendsRouter.get("/rose.json", async (req, res) => {
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

module.exports = legendsRouter;
