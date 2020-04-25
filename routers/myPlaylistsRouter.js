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
    const code = await db.getCode();
    console.log("code from db in PL router", code);

    // try {
    //     const grant = await spotifyApi.authorizationCodeGrant(code)
    //     const token = await spotifyApi.setAccessToken(
    //         grant.body["access_token"]
    //     );
    //     const topTen = await spotifyApi.getArtistTopTracks(
    //         "3qBI9YP4DU1P1G6UPjpMcN",
    //         "DE"
    //     );
    //     res.json(topTen.body.tracks);
    // } catch (err) {
    //     console.log(
    //         "Unfortunately, something has gone wrong in mariam",
    //         err.message
    //     );
    // }
});

///get user

// First retrieve an access token
// spotifyApi
//     .authorizationCodeGrant(code)
//     .then(function (data) {
//         console.log("Retrieved access token", data.body["access_token"]);

//         // Set the access token
//         spotifyApi.setAccessToken(data.body["access_token"]);

//         // Use the access token to retrieve information about the user connected to it
//         return spotifyApi.getMe();
//     })
//     .then(function (data) {
//         // "Retrieved data for Faruk Sahin"
//         console.log("Retrieved data for " + data.body["display_name"]);

//         // "Email is farukemresahin@gmail.com"
//         console.log("Email is " + data.body.email);

//         // "Image URL is http://media.giphy.com/media/Aab07O5PYOmQ/giphy.gif"
//         console.log("Image URL is " + data.body.images[0].url);

//         // "This user has a premium account"
//         console.log("This user has a " + data.body.product + " account");
//     })
//     .catch(function (err) {
//         console.log("Something went wrong", err.message);
//     });

module.exports = myPlaylistsRouter;
