import React from "react";
import ElectroSpring from "./electro_spring";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

export default function Gallery() {
    return (
        <React.Fragment>
            <div className="gallery-container">
                <Link to="/kahrabiat">
                    <div className="category">
                        <h3 className="category-title">
                            Electro-arabic Spring
                        </h3>
                        <img
                            className="cat-pic"
                            src="/images/kahraba.jpg"
                            alt="electro-arabic-artists"
                        />
                    </div>
                </Link>

                <Link to="/legends">
                    <div className="category">
                        <h3 className="category-title">Queer Legends</h3>
                        <img
                            className="cat-pic"
                            src="/images/chavela.jpg"
                            alt="queer-fem-legends"
                        />
                    </div>
                </Link>

                <Link to="/devil-dykes">
                    <div className="category">
                        <h3 className="category-title">Devil Dykes</h3>
                        <img
                            className="cat-pic"
                            src="/images/2dykes.jpg"
                            alt="queer-fem-legends"
                        />
                    </div>
                </Link>
                <Link to="/black-pride">
                    <div className="category">
                        <h3 className="category-title">Black Prides</h3>
                        <img
                            className="cat-pic"
                            src="/images/trumpetGrl.jpg"
                            alt="xodade"
                        />
                    </div>
                </Link>
                <Link to="/wilad">
                    <div className="category">
                        <h3 className="category-title">Children of Night</h3>
                        <img
                            className="cat-pic"
                            src="/images/wiladAlLeil.jpg"
                            alt="gayboys-here"
                        />
                    </div>
                </Link>
                <Link to="/femi-hip-hop">
                    <div className="category">
                        <h3 className="category-title">Feminist Hip-Hop</h3>
                        <img
                            className="cat-pic"
                            src="/images/fam-hiphop.jpg"
                            alt="fem-hip-hop"
                        />
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
} //closes cpnt
