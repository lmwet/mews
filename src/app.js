// import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCode } from "./actions";

import Header from "./header";
import ElectroSpring from "./electro_spring";
import Gallery from "./gallery";

export default function App() {
    // const code = useSelector((state) => state && state.code);

    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Header />
                    <Gallery />
                    <Route path="/kahrabiat" component={ElectroSpring} />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}
