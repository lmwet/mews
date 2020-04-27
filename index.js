const express = require("express");
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
const compression = require("compression");
const cookieSession = require("cookie-session");
var cookieParser = require("cookie-parser");
const server = require("http").Server(app);
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("./secrets.json");
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
const BlackPrideRouter = require("./routers/BlackPrideRouter");
const wiladRouter = require("./routers/wiladRouter");
const femiHipRouter = require("./routers/femiHipRouter");
const myPlaylistsRouter = require("./routers/myPlaylistsRouter");

////////// MIDDLEWARE //////////

app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
).use(cookieParser());
app.use(devilDykesRouter);
app.use(electroSpringRouter);
app.use(myPlaylistsRouter);
app.use(legendsRouter);
// app.use(BlackPrideRouter);
// app.use(wiladRouter);
// app.use(femiHipRouter);

app.use(express.static("./public"));

const cookieSessionMiddleware = cookieSession({
    secret: `secret`,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);

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

    console.log("req.session", req.session);
    const { code } = req.query;
    console.log("code from callback", code);

    spotifyApi.authorizationCodeGrant(code).then(function (data) {
        // When our access token will expire
        // var tokenExpirationEpoch;

        console.log("Retrieved access token", data.body["access_token"]);

        console.log("1h access token set in session", req.session.token);

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
    console.log(req.body.newPlaylist);

    const playlistTitle = req.body.playlistName;
    let userId;

    let uris = req.body.newPlaylist.map(function (item) {
        return item["songUri"];
    });
    console.log("uris before shift", uris);

    const shifted = uris.shift();
    console.log("shifted", shifted);

    console.log("uris after shift", uris);

    console.log("accessToken" + spotifyApi.getCredentials().accessToken);
    console.log(" spotifyApi", spotifyApi);

    spotifyApi.getMe().then(function (data) {
        // "Retrieved data for Faruk Sahin"
        console.log("Retrieved data for " + data.body["display_name"]);

        console.log("user id " + data.body.id);

        let userId = data.body.id;

        // "Image URL is http://media.giphy.com/media/Aab07O5PYOmQ/giphy.gif"
        console.log("Image URL is " + data.body.images[0].url);

        // "This user has a premium account"
        console.log("This user has a " + data.body.product + " account");

        return spotifyApi
            .createPlaylist("e78n0efwj7pf0b72yyail012n", playlistTitle)
            .then(function (data) {
                console.log("data in add", data);

                console.log("Ok. Playlist created!");
                playlistId = data.body["id"];
                userId = data.body.owner.id;
                console.log("Playlist id", playlistId);
                console.log("uris", uris);
                console.log("userId in add tracks", userId);
                console.log("playlistTitle in add", playlistTitle);

                console.log("playlist href ", data.body.external_urls.spotify);

                // Add tracks to the playlist
                return spotifyApi.addTracksToPlaylist(playlistId, uris);
            })
            .catch(function (err) {
                console.log("Something went wrong", err);
            });
    });
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log("all routes runnin");

    //insert in db ??
    // db.addCode(123456)
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((err) => {
    //         console.log("err in addcode", err);
    //     });
});

server.listen(8080, function () {
    console.log("I'm listening.");
});
