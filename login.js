import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default function Login() {


    submit() {
        axios
            .post("/login", {
                email: this.state.email,
                password: this.state.password,
            })
            .then((res) => {
                if (res.data.success) {
                    location.replace("/");
                    console.log("location replaced");
                } else {
                    this.setState({
                        error: true,
                    });
                }
            });
    }
    handleChange({ target }) {
        //u could do this: this[target.name] = target.value;
        this.setState({
            [target.name]: target.value, //all sent to state!
        });
    }

    return (
        <div>
            {error && <div className="error">Ow no, something went wrong.</div>}
            <input name="email" placeholder="e-mail" onChange={handleChange} />
            <input
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <button id="log-in" onClick={submit}>
                Log in
            </button>
            <Link to="password">Reset password</Link>
        </div>
    );

} //closes cpnt
