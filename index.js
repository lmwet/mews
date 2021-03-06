const express = require("express");
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
const compression = require("compression");
const server = require("http").Server(app);
// const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("./secrets.json");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});

const db = require("./utils/db.js");

//routers
const electroSpringRouter = require("./routers/electroSpringRouter");
const devilDykesRouter = require("./routers/devilDykesRouter");
const legendsRouter = require("./routers/legendsRouter");
const blackPrideRouter = require("./routers/BlackPrideRouter");
const wiladRouter = require("./routers/wiladRouter");
const femiHipRouter = require("./routers/femiHipRouter");
const myPlaylistsRouter = require("./routers/myPlaylistsRouter");
const queersRouter = require("./routers/queersRouter");
const xodadeRouter = require("./routers/xodadeRouter");

////////// MIDDLEWARE //////////

app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

////// ROUTERS //////
app.use(devilDykesRouter);
app.use(electroSpringRouter);
app.use(myPlaylistsRouter);
app.use(legendsRouter);
app.use(queersRouter);
app.use(xodadeRouter);
app.use(blackPrideRouter);
app.use(wiladRouter);
app.use(femiHipRouter);

app.use(express.static("./public"));

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
/////// web api Authorization //////

var playlistId;

const config = {
    scope: [
        "user-read-email",
        "user-read-private",
        "user-top-read",
        "streaming",
        "user-follow-read",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-recently-played",
        "user-read-playback-state",
        "playlist-modify-private",
        "playlist-modify-public",
    ],
    showDialog: true,
};

app.get("/login", (req, res) => {
    console.log("login running");
    const uri = spotifyApi.createAuthorizeURL(
        config.scope,
        "",
        config.showDialog
    );

    res.redirect(uri);
});

app.get("/callback", (req, res) => {
    console.log("callback running");

    const { code } = req.query;
    console.log("code from callback", code);

    spotifyApi.authorizationCodeGrant(code).then(function (data) {
        console.log("Retrieved access token", data.body["access_token"]);

        // console.log("1h access token set in session", req.session.token);

        spotifyApi.setAccessToken(data.body["access_token"]);
        // spotifyApi.setRefreshToken(data.body["refresh_token"]);
        // console.log("refresh_token ", data.body["refresh_token"]);

        //set token expiration to 1h
        // tokenExpirationEpoch =
        //     new Date().getTime() / 3600 + data.body["expires_in"];
        // console.log(
        //     "Retrieved token. It expires in " +
        //         Math.floor(
        //             tokenExpirationEpoch - new Date().getTime() / 3600
        //         ) +
        //         " seconds!"
        // );
    }),
        res.redirect("/");
});

app.post("/mix", (req, res) => {
    const playlistTitle = req.body.playlistName;
    const userName = req.body.userName;
    console.log("req in post mix", req);

    let uris = req.body.newPlaylist.map(function (item) {
        return item["songUri"];
    });

    console.log("uris", uris);

    spotifyApi.getMe().then(function (data) {
        let userId = data.body["id"];

        return spotifyApi
            .createPlaylist(userId, playlistTitle)
            .then(function (data) {
                console.log("data in create PL", data);

                console.log("Ok. Playlist created!");
                playlistId = data.body["id"];
                userId = data.body.owner.id;

                const url = data.body.external_urls.spotify;

                db.addPlaylist(userId, url, playlistTitle, userName).catch(
                    (e) => {
                        console.log("error in addPlaylist", e);
                        res.json({ success: false });
                    }
                );

                // Add tracks to the playlist
                return spotifyApi.addTracksToPlaylist(playlistId, uris);
            })
            .catch(function (err) {
                console.log("Something went wrong in create PL", err);
            });
    });
});

app.post("/newtrack", (req, res) => {
    const playlistId = "6MQ4G7ECe56tUPMC8dtVwS";
    console.log("req in post newtrack", req.body.newTrack);
    const newTrack = req.body.newTrack;
    console.log("newTrack", newTrack);

    try {
        // Add the new track to the playlist
        spotifyApi
            .getMe()
            .then(function () {
                return spotifyApi.addTracksToPlaylist(playlistId, [newTrack]);
            })
            .catch((e) => {
                console.log("error in addTracktoPlaylist", e);
                res.json({ success: false });
            });
    } catch (e) {
        res.json({ success: false });
        console.log("err in post /newTrack");
    }
});

app.get("/mix", async (req, res) => {
    try {
        const allPlaylists = await db.getPlaylists();
        res.json([allPlaylists, { success: true }]);
    } catch (e) {
        res.json({ success: false });
        console.log("err in get /mix");
    }
});

app.get("/artists", async (req, res) => {
    try {
        const artists = await db.getArtists();
        res.json([artists, { success: true }]);
    } catch (e) {
        res.json({ success: false });
        console.log("err in get /artists");
    }
});

// app.get("/bigmix", async (req, res) => {
//     try {
//         const bigmix = await db.getLineup();
//         console.log("bigmix", bigmix.rows);
//         res.json(bigmix.rows);
//         // res.json(bigmix, { success: true });
//     } catch (e) {
//         res.json({ success: false });
//         console.log("err in get /bigmix");
//     }
// });

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log("all routes runnin");
});

server.listen(process.env.PORT || 8080);
