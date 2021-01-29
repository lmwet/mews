import React from "react";
import { Link } from "react-router-dom";

export default function Help() {
    return (
        <div className="container">
            <h3>How to use this app...?</h3>{" "}
            <p className="info-text">
                Allow pop-up windows in your browser // Autoriser les pop-ups
            </p>
            <p className="info-text">
                To listen to the full songs or albums, and to create playlists,
                you have to be{" "}
                <Link to="/login" className="link">
                    <h4>logged in to spotify here.</h4>
                </Link>{" "}
            </p>
            <p>Either with your own account, or you can use this:</p>
            <p className="info-text">
                username: m-e-w-s@posteo.de | password: 7rriaSl1mw3d1la
            </p>
            <div className="white-space"></div>
            <h3>How to play tracks...?</h3>{" "}
            <p className="info-text">
                Once logged in, just click the title of a track and the player
                will show up. Click on PLAY ►.
            </p>
            <div className="white-space"></div>
            <h3>How to play entire albums...?</h3>{" "}
            <p className="info-text">
                On the left of each track, there are smaller letters: click on
                them to play the entire album.
            </p>
            <div className="white-space"></div>
            <h3>How to create a playslit...?</h3>{" "}
            <p className="info-text">
                Again, you have to be logged in. When you are in one of the
                "categories", open the "my Mix" white card.{" "}
            </p>
            <p>
                Then, choose your tracks by clicking the roundish "+" button
                right from the titles.
            </p>
            <p className="info-text">
                When you have all the tracks you want, give it a name and an
                author name and click "create".
            </p>
            <p className="info-text">
                Your mix is published on the "Jukebox" section AND on the
                spotify account you were using.
            </p>
            <div className="white-space"></div>
            <h3>What the hell is this Rose Patch...?</h3>{" "}
            <p className="info-text">
                It's a secret button that takes you somewhere random in the
                site. A discovery rocket.
            </p>
            <div className="white-space"></div>
            <h3>Contact the developper</h3>{" "}
            <p className="info-text">
                Mail me at{" "}
                <a className="link" href="mailto: lmwet@posteo.de">
                    lmwet@posteo.de
                </a>
                . (English, French, Spanish, German, Arabic).{" "}
            </p>
            <p>
                I am glad for any feedback and I would love to develope this app
                with other people.
            </p>
        </div>
    );
}
