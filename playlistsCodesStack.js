var authorizationCode =
    "<insert authorization code with playlist-modify-public scope>";

var spotifyApi = new SpotifyWebApi({
    clientId: "<insert client id>",
    clientSecret: "<insert client secret>",
    redirectUri: "<insert redirect URI>",
});

var playlistId;

// First retrieve an access token
spotifyApi
    .authorizationCodeGrant(authorizationCode)
    .then(function (data) {
        // Save the access token so that it's used in future requests
        spotifyApi.setAccessToken(data["access_token"]);

        // Create a playlist
        return spotifyApi.createPlaylist(
            "thelinmichael",
            "My New Awesome Playlist"
        );
    })
    .then(function (data) {
        console.log("Ok. Playlist created!");
        playlistId = data.body["id"];

        // Add tracks to the playlist
        return spotifyApi.addTracksToPlaylist("thelinmichael", playlistId, [
            "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
            "spotify:track:6tcfwoGcDjxnSc6etAkDRR",
            "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
        ]);
    })
    .then(function (data) {
        console.log("Ok. Tracks added!");

        // Woops! Made a duplicate. Remove one of the duplicates from the playlist
        return spotifyApi.removeTracksFromPlaylist(
            "thelinmichael",
            playlistId,
            [
                {
                    uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
                    positions: [0],
                },
            ]
        );
    })
    .then(function (data) {
        console.log("Ok. Tracks removed!");

        // Actually, lets just replace all tracks in the playlist with something completely different
        return spotifyApi.replaceTracksInPlaylist("thelinmichael", playlistId, [
            "spotify:track:5Wd2bfQ7wc6GgSa32OmQU3",
            "spotify:track:4r8lRYnoOGdEi6YyI5OC1o",
            "spotify:track:4TZZvblv2yzLIBk2JwJ6Un",
            "spotify:track:2IA4WEsWAYpV9eKkwR2UYv",
            "spotify:track:6hDH3YWFdcUNQjubYztIsG",
        ]);
    })
    .then(function (data) {
        console.log("Ok. Tracks replaced!");
    })
    .catch(function (err) {
        console.log(err.message);
        console.log("Something went wrong!");
    });

///codes from myPlaylist

//--------- codes for later ---------------

// .then(function (data) {
//     console.log("Ok. Playlist created!");
//     playlistId = data.body["id"];

//     // Add tracks to the playlist
//     return spotifyApi.addTracksToPlaylist("thelinmichael", playlistId, [
//         "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
//         "spotify:track:6tcfwoGcDjxnSc6etAkDRR",
//         "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
//     ]);
// })
// .then(function (data) {
//     console.log("Ok. Tracks added!");

//     // Woops! Made a duplicate. Remove one of the duplicates from the playlist
//     return spotifyApi.removeTracksFromPlaylist(
//         "thelinmichael",
//         playlistId,
//         [
//             {
//                 uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
//                 positions: [0],
//             },
//         ]
//     );
// })
// .then(function (data) {
//     console.log("Ok. Tracks removed!");

//     // Actually, lets just replace all tracks in the playlist with something completely different
//     return spotifyApi.replaceTracksInPlaylist("thelinmichael", playlistId, [
//         "spotify:track:5Wd2bfQ7wc6GgSa32OmQU3",
//         "spotify:track:4r8lRYnoOGdEi6YyI5OC1o",
//         "spotify:track:4TZZvblv2yzLIBk2JwJ6Un",
//         "spotify:track:2IA4WEsWAYpV9eKkwR2UYv",
//         "spotify:track:6hDH3YWFdcUNQjubYztIsG",
//     ]);
// })
// .then(function (data) {
//     console.log("Ok. Tracks replaced!");
// })
// .catch(function (err) {
//     console.log(err.message);
//     console.log("Something went wrong!");
// });

// console.log("cookies in PL", document.cookie);
// console.log("code in PL", code);
// const handleChange = ({ target }) => {
//     setNewPlaylist(target.value);
// };
