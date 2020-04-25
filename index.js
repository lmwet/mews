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

//routers
const electroSpringRouter = require("./routers/electroSpringRouter");
const devilDykesRouter = require("./routers/devilDykesRouter");
const legendsRouter = require("./routers/legendsRouter");
const BlackPrideRouter = require("./routers/BlackPrideRouter");
const wiladRouter = require("./routers/wiladRouter");
const femiHipRouter = require("./routers/femiHipRouter");
const myPlaylistsRouter = require("./routers/myPlaylistsRouter");

////////// MIDDLEWARE //////////

const cookieSessionMiddleware = cookieSession({
    secret: `secret`,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);

app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(devilDykesRouter);
app.use(electroSpringRouter);
app.use(myPlaylistsRouter);
// app.use(legendsRouter);
// app.use(BlackPrideRouter);
// app.use(wiladRouter);
// app.use(femiHipRouter);

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
app.use(express.static("./public"));
/////// web api Authorization //////

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

    spotifyApi.authorizationCodeGrant(code).then(function (data) {
        req.session = {};
        req.session.bla = "blabla";
        //getting access and refresh token

        // When our access token will expire
        var tokenExpirationEpoch;

        console.log("Retrieved access token", data.body["access_token"]);
        req.session.token = data.body["access_token"];
        console.log("1h access token set in session", req.session.token);
        spotifyApi.setAccessToken(data.body["access_token"]);
        spotifyApi.setRefreshToken(data.body["refresh_token"]);
        console.log("refresh_token access token", data.body["refresh_token"]);

        //set token expiration to 1h
        tokenExpirationEpoch =
            new Date().getTime() / 3600 + data.body["expires_in"];
        console.log(
            "Retrieved token. It expires in " +
                Math.floor(tokenExpirationEpoch - new Date().getTime() / 3600) +
                " seconds!"
        );
    }),
        res.redirect("/");
});

app.get("/logout", (req, res) => {
    console.log("logout running");
    res.redirect("/");
});

app.get("/user.json", async (req, res) => {
    console.log("cla cookie in playlist route", req.session.bla);
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log("all routes runnin");
    req.session = {};

    req.session.bla = "bla";
});

server.listen(8080, function () {
    console.log("I'm listening.");
});
