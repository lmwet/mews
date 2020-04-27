import { BrowserRouter, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

//components
import Header from "./header";
import ElectroSpring from "./electro_spring";
import Gallery from "./gallery";
import DevilDykes from "./devilDykes";
import Legends from "./legends";
import BlackPride from "./blackPride";
import Wilad from "./wilad";
import FemHip from "./femihip";
import MyPlaylists from "./myPlaylists";
import Jukebox from "./jukebox";

export default function App() {
    const [newPlaylistInApp, setNewPlaylistInApp] = useState([]);

    useEffect(() => {
        console.log("newPlaylist in PL cpnt", newPlaylistInApp);
    }, [newPlaylistInApp]);

    //  ---------- to create the playlist -----------

    const nameUser = ({ target }) => {
        console.log("nameuser runs");
        setUserName(target.value);
        console.log("user", userName);
    };

    const namePlaylist = ({ target }) => {
        console.log("nameplaylist runs");

        setPlaylistName(target.value);
        console.log("PlaylistName", playlistName);
    };

    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Gallery} />
                <Route path="/kahrabiat" component={ElectroSpring} />
                <Route path="/devil-dykes" component={DevilDykes} />
                <Route path="/legends" component={Legends} />
                <Route
                    path="/jukebox"
                    render={(props) => (
                        <Jukebox
                            key={props.match.url}
                            match={props.match}
                            history={props.history}
                            setNewPlaylistInApp={(newPlaylistInApp) =>
                                setNewPlaylistInApp(newPlaylistInApp)
                            }
                        />
                    )}
                />

                {/* <Route path="/black-pride" component={BlackPride} />
                <Route path="/wilad" component={Wilad} /> */}
                {/* <Route path="/femi-hip-hop" component={FemHip} />  */}
                <Route path="/my-playlists" component={MyPlaylists} />
            </BrowserRouter>
        </React.Fragment>
    );
}
