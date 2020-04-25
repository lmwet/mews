import { BrowserRouter, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCode } from "./actions";

//components
import Header from "./header";
import ElectroSpring from "./electro_spring";
import Gallery from "./gallery";
import DevilDykes from "./devilDykes";

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
                <Route path="/femi-hip-hop" component={FemHip} />  */}
            </BrowserRouter>
        </React.Fragment>
    );
}
