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

export default function App() {
    // const code = useSelector((state) => state && state.code);

    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Gallery} />
                <Route path="/kahrabiat" component={ElectroSpring} />
                <Route path="/devil-dykes" component={DevilDykes} />
                {/* <Route path="/legends" component={Legends} />
                <Route path="/black-pride" component={BlackPride} />
                <Route path="/wilad" component={Wilad} />
                <Route path="/femi-hip-hop" component={FemHip} /> */}
                <Route path="/my-playlists" component={MyPlaylists} />
            </BrowserRouter>
        </React.Fragment>
    );
}
