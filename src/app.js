import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

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
import Queer from "./queer";
import Xodade from "./xodade";
import Radio from "./radio";
import Help from "./help";

export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Gallery} />
                <Route path="/kahrabiat" component={ElectroSpring} />
                <Route path="/devil-dykes" component={DevilDykes} />
                <Route path="/queer" component={Queer} />
                <Route path="/legends" component={Legends} />
                <Route path="/black-pride" component={BlackPride} />
                <Route path="/wilad" component={Wilad} />
                <Route path="/femi-hip-hop" component={FemHip} />
                <Route path="/my-playlists" component={MyPlaylists} />
                <Route path="/xodade" component={Xodade} />
                <Route
                    path="/jukebox"
                    render={(props) => (
                        <Jukebox
                            key={props.match.url}
                            match={props.match}
                            history={props.history}
                        />
                    )}
                />
                <Route path="/radio" component={Radio} />
                <Route path="/help" component={Help} />
            </BrowserRouter>
        </React.Fragment>
    );
}
