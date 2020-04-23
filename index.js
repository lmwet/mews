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
    console.log("client ID", CLIENT_ID, "REDIRECT_URI", REDIRECT_URI);
    console.log("uri", uri);
    res.redirect(uri);
    console.log("req.query", req.query);
});

app.get("/callback", (req, res) => {
    console.log("callback running");

    const { code } = req.query;
    console.log("code", code);

    spotifyApi
        .authorizationCodeGrant(code)
        .then(function (data) {
            console.log("Retrieved access token", data.body["access_token"]);
            spotifyApi.setAccessToken(data.body["access_token"]);
        })
        .catch(function (error) {
            console.log(error);
        });

    res.send(CLIENT_SECRET);
});

//last route
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log("all routes runnin");
});

server.listen(8080, function () {
    console.log("I'm listening.");
});
