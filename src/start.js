import React from "react";
import ReactDOM from "react-dom";
//when you export default, import is without {}

import App from "./app";
// import { init } from "./socket";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
// import * as io from "socket.io-client";

// let elem = <img id="banner-img" src="/images/mews.png" />;

// look at url and know if user is logged in or not

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);
// init(store);
let elem = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(elem, document.querySelector("main"));
