import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";
import App from "./app";
// import { init } from "./socket";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import reduxPromise from "redux-promise";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./reducer";

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(reduxPromise))
// );

let elem = <h2>Hello Pretty</h2>;

// look at url and know if user is logged in or not
if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else {
    // init(store);
    elem = (
        // <Provider store={store}>
        <App />
        // </Provider>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
