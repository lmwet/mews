import React from "react";
import axios from "./axios"; //we import it from the file so it comes with the csurf stuff
import Header from "./header";
import Login from "./login";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            uploaderIsVisible: false,
        };
    }

    // componentDidMount() {
    //     console.log("this in app", this);

    //     //get route to /
    //     axios
    //         .get("/")
    //         .then((resp) => {
    //             console.log("resp in / app", resp);
    //         })
    //         .catch(function (err) {
    //             console.log("err in get /", err);
    //         });
    // }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Header />
                    <Login />
                </div>
            </React.Fragment>
        );
    }
}
