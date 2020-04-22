const express = require("express");
const compression = require("compression");
// const http = require("http");
// const { hash, compare } = require("./utils/bcrypt");
// const db = require("./utils/db.js");
// const conf = require("./config.json");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:8888" });
const request = require("request"); // "Request" library
const cors = require("cors");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const { CLIENT_ID, CLIENT_SECRET } = require("./secrets.json");
var client_id = CLIENT_ID; // Your client id
var client_secret = CLIENT_SECRET; // Your secret
var redirect_uri = "http://localhost:8888/callback"; // Your redirect uri

//////////// MIDDLEWARE /////////////

app.use(compression());

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
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

const cookieSessionMiddleware = cookieSession({
    secret: `secret`,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);

// app.get("*", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

/////////////// END MIDDLEWARE ///////////////

//////// AUTHORIZATION SPOTIFY ////////////

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

var generateRandomString = function (length) {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var stateKey = "spotify_auth_state";

app.use(express.static(__dirname + "/public"))
    .use(cors())
    .use(cookieParser());

//The first call is the service ‘/authorize’ endpoint, passing to it the client ID, scopes, and redirect URI.
//This is the call that starts the process of authenticating to user and gets the user’s authorization to access data.
app.get("/login", function (req, res) {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);
    console.log("login route running");

    // your application requests authorization
    var scope =
        "user-read-playback-state streaming playlist-modify-public user-library-modify";

    res.redirect(
        "https://accounts.spotify.com/authorize?" +
            querystring.stringify({
                response_type: "code",
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state,
            })
    );
    console.log("redirect ran");
});

app.get("/", async (req, res) => {
    try {
        res.sendFile(__dirname + "/index.html");
        console.log("get / route ran");
    } catch (e) {
        console.log("err in get /");
    }
});

app.get("/callback", function (req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter
    console.log("callbak running");

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        console.log("first if statement");

        res.redirect(
            "/#" +
                querystring.stringify({
                    error: "state_mismatch",
                })
        );
    } else {
        console.log(" else statement");
        res.clearCookie(stateKey);
        var authOptions = {
            url: "https://accounts.spotify.com/api/token",
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: "authorization_code",
            },
            headers: {
                Authorization:
                    "Basic " +
                    new Buffer(client_id + ":" + client_secret).toString(
                        "base64"
                    ),
            },
            json: true,
        };

        request.post(authOptions, function (error, response, body) {
            console.log("running request.post");

            if (!error && response.statusCode === 200) {
                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                const options = {
                    url: "https://api.spotify.com/v1/me",
                    headers: { Authorization: "Bearer " + access_token },
                    json: true,
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    console.log("access token body request", body);
                });
                req.session.access_token = querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token,
                });

                res.redirect(
                    "/#" +
                        querystring.stringify({
                            access_token: access_token,
                            refresh_token: refresh_token,
                        })
                );
            } else {
                res.redirect(
                    "/#" +
                        querystring.stringify({
                            error: "invalid_token",
                        })
                );
            }
        });
    }
});

app.get("/refresh_token", function (req, res) {
    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            Authorization:
                "Basic " +
                new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
        form: {
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        },
        json: true,
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                access_token: access_token,
            });
        }
    });
});

app.get("/blue", (req, res) => {
    console.log("req.session", req.session);
    res.json(req.session);
});

app.listen(8888, function () {
    console.log("I'm listening.");
});
