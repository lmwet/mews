import React from "react";
// import axios from "./axios"; //we import it from the file so it comes with the csurf stuff
import Header from "./header";
import Login from "./login";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Login} />
                    {/* <Route path="/gallery" component={Gallery} /> */}
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}
