import React from "react";
import ElectroSpring from "./electro_spring";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Gallery(props) {
    return (
        <React.Fragment>
            <h2>Take a tour</h2>
            <div className="gallery-container">
                <Link to="/kahrabiat">
                    <div className="category">
                        <h3>Electro-arabic Spring</h3>
                        <img
                            className="cat-pic"
                            src="/images/kahraba.jpg"
                            alt="electro-arabic-artists"
                        />
                    </div>
                </Link>

                <Link to="/legends">
                    <div className="category">
                        <h3>Queer-fem Legends</h3>
                        <img
                            className="cat-pic"
                            src="/images/chavela.jpg"
                            alt="queer-fem-legends"
                        />
                    </div>
                </Link>

                <Link to="/brujas">
                    <div className="category">
                        <h3>Brujas</h3>
                        <img
                            className="cat-pic"
                            src="/images/brujas.jpg"
                            alt="queer-fem-legends"
                        />
                    </div>
                </Link>
                <Link to="/xodade">
                    <div className="category">
                        <h3>Xodade</h3>
                        <img
                            className="cat-pic"
                            src="/images/xodade.jpg"
                            alt="queer-fem-legends"
                        />
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
} //closes cpnt
