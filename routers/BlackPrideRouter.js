const express = require("express");
const blackPrideRouter = express.Router();

const SpotifyWebApi = require("spotify-web-api-node");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID || process.env.CLIENT_ID,
    clientSecret: CLIENT_SECRET || process.env.CLIENT_SECRET,
    redirectUri: REDIRECT_URI || process.env.REDIRECT_URI,
});

blackPrideRouter.get("/simbo.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "6eXZu6O7nAUA5z6vLV8NKI",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in simbo",
            err.message
        );
    }
});

blackPrideRouter.get("/muthoni.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "2FzYw9fn2ZtQ7sZma5BxuB",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in muthoni",
            err.message
        );
    }
});

blackPrideRouter.get("/bia.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "0Aj4m8El9TdnqyVHhkuloa",
            "BR"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in bia",
            err.message
        );
    }
});

blackPrideRouter.get("/angelique.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "51qUDJb5AtQX6jIL4VJx6M",
            "FR"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in angelik",
            err.message
        );
    }
});

blackPrideRouter.get("/akua.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "2xxyuUOZJxayJDF6SxLG2K",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in akua",
            err.message
        );
    }
});

blackPrideRouter.get("/hawa.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "58LlB4r5sajL2lYbt8E7Ea",
            "FR"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in ahawa",
            err.message
        );
    }
});

blackPrideRouter.get("/jamila.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "4UodukR17NIQfNu5uaqm9B",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in jamila",
            err.message
        );
    }
});

blackPrideRouter.get("/sampa.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "7fw0E8WHdG3r9SuPBcGmWk",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in sampa",
            err.message
        );
    }
});

blackPrideRouter.get("/lous.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "2HPiMwJktBXqakN0hnON2R",
            "BE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in lous",
            err.message
        );
    }
});

blackPrideRouter.get("/lizzo.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "56oDRnqbIiwx4mymNEv7dS",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in lizzo",
            err.message
        );
    }
});

module.exports = blackPrideRouter;
