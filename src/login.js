import React, { useEffect } from "react";
import axios from "./axios";

export default function Login() {
    useEffect(() => {
        //get route to /
        console.log("useEffect runnin");

        axios
            .get("/login")
            .then((resp) => {
                console.log("resp in login", resp);
            })
            .catch(function (err) {
                console.log("err in get /", err);
            });
    }, []);

    const authorize = () => {
        /**
         * Obtains parameters from the hash of the URL
         * @return Object
         */

        function getHashParams() {
            var hashParams = {};
            var e,
                r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while ((e = r.exec(q))) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }

        var params = getHashParams();

        var access_token = params.access_token,
            refresh_token = params.refresh_token,
            error = params.error;

        if (error) {
            alert("There was an error during the authentication");
        }
        // else {
        // if (access_token) {
        //     // render oauth info
        //     oauthPlaceholder.innerHTML = oauthTemplate({
        //         access_token: access_token,
        //         refresh_token: refresh_token,
        //     });
        console.log("access_token", access_token);
        axios
            .post("https://api.spotify.com/v1/me", {
                headers: { Authorization: "Bearer " + access_token },
            })
            .then((res) => {
                console.log("res in post /me");

                console.log("lpost to /me");
                document.getElementById("login").hide();
                document.getElementById("loggedin").show();
                location.replace("/");
            })
            .catch((e) => {
                console.log("err in get spotify /me", e);
            });
    }; //closes auth function
    authorize();

    return (
        <React.Fragment>
            <div className="container">
                <div id="login">
                    <h1>Welcome to Mews!</h1>
                    <p>Unfortunately we need to login to Spotify...</p>
                    <a href="/login" className="btn btn-primary">
                        Log in
                    </a>
                </div>
                <div id="loggedin">
                    <div id="user-profile">Hey user you are logged in</div>
                    <div id="oauth"></div>
                </div>
            </div>
        </React.Fragment>
    );
}
