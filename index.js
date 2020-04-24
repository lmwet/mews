const express = require("express");
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
const compression = require("compression");
const server = require("http").Server(app);
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("./secrets.json");
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
});
const cookieSession = require("cookie-session");

////////// MIDDLEWARE //////////

app.use(express.static("./public"));
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

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

const cookieSessionMiddleware = cookieSession({
    secret: `secret`,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);

/////// web api Authorization //////

const config = {
    scope: [
        "user-read-email",
        "user-read-private",
        "user-top-read",
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

    spotifyApi
        .authorizationCodeGrant(code)
        .then(function (data) {
            console.log("Retrieved access token", data.body["access_token"]);
            spotifyApi.setAccessToken(data.body["access_token"]);
            req.session.token = data.body["access_token"];
            console.log("token in session", req.session.token);
            req.session.code = code;
            console.log("code in session cookie", req.session.code);
        })
        .catch(function (error) {
            console.log(error);
        });
    res.redirect("/");
});

app.get("/mariam.json", async (req, res) => {
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

app.get("/aya.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "0Od49f50ljr4kmQgclwHkm",
            "DE"
        );
        res.json(topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in aya",
            err.message
        );
    }
});

app.get("/emel.json", async (req, res) => {
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
        console.log("maii sent", topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in emel",
            err.message
        );
    }
});

app.get("/maii.json", async (req, res) => {
    try {
        const grant = await spotifyApi.clientCredentialsGrant();
        const token = await spotifyApi.setAccessToken(
            grant.body["access_token"]
        );
        const topTen = await spotifyApi.getArtistTopTracks(
            "1e9RnsEdnC3LG7vHcAozc8",
            "DE"
        );
        res.json(topTen.body.tracks);
        console.log("maii sent", topTen.body.tracks);
    } catch (err) {
        console.log(
            "Unfortunately, something has gone wrong in maii",
            err.message
        );
    }
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log("all routes runnin");
});

server.listen(8080, function () {
    console.log("I'm listening.");
});
