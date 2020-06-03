const express = require("express");
const xodadeRouter = express.Router();

const SpotifyWebApi = require("spotify-web-api-node");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
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
            "TR"
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
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in lena",
            err.message
        );
    }
});

xodadeRouter.get("/gaelynn.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "68zltLWXjBB3dIqHikDXZy",
            "IR"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in gaelynn",
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

// xodadeRouter.get("/ivy.json", async (req, res) => {
//     try {
//         const grant = await spotifyApi.clientCredentialsGrant();
//         const token = await spotifyApi.setAccessToken(
//             grant.body["access_token"]
//         );
//         const topTen = await spotifyApi.getArtistTopTracks(
//             "6p2442ymrT9lZEuCZJdYcH",
//             "SE"
//         );
//         res.json(topTen.body.tracks);
//     } catch (err) {
//         console.log(
//             "Unfortunately, something has gone wrong in ivy",
//             err.message
//         );
//     }
// });

xodadeRouter.get("/tierra.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "4lPl9gqgox3JDiaJ1yklKh",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in tierra",
            err.message
        );
    }
});

xodadeRouter.get("/teyana.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "4ULO7IGI3M2bo0Ap7B9h8a",
            "SE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in teyana",
            err.message
        );
    }
});

xodadeRouter.get("/ikue.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "0eQ97WxHfIWpkbo1AlO99H",
            "JP"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in ikue",
            err.message
        );
    }
});

xodadeRouter.get("/choral.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "1Yz2wALZeP6bIKtLIwXPL0",
            "DE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in choral",
            err.message
        );
    }
});

xodadeRouter.get("/masu.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "14d5KCX9nprUcxnKIShrr1",
            "JP"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in masu",
            err.message
        );
    }
});

xodadeRouter.get("/dina.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "4dejJ4Gg0YVjWRUdfpF3yA",
            "EG"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in dina",
            err.message
        );
    }
});

xodadeRouter.get("/lido.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "1IdkKQ9CM1i0wygfxYV4Z3",
            "CO"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in lido",
            err.message
        );
    }
});

xodadeRouter.get("/zakiya.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "1JTB5u5ODGNha3vMLQXmp2",
            "US"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in zakiya",
            err.message
        );
    }
});

xodadeRouter.get("/luzmila.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "5nerlXgmkkutK76kjPNjCr",
            "BO"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in luzmila",
            err.message
        );
    }
});

xodadeRouter.get("/jun.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "6fI3ZQseiBwzjXLSVuJGEI",
            "JP"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in jun",
            err.message
        );
    }
});

xodadeRouter.get("/phew.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "7mTJBVGJmkgbjwvbzc0Bqb",
            "JP"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in phew",
            err.message
        );
    }
});

xodadeRouter.get("/takako.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "3XxrXIYWH5PpuTbYSXDOZw",
            "JP"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in takako",
            err.message
        );
    }
});

module.exports = xodadeRouter;
