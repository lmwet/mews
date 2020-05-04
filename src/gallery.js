import React, { useState } from "react";
import Info from "./info";
import { Link } from "react-router-dom";

export default function Gallery() {
    const [showInfo, setShowInfo] = useState(true);

    const toggleBack = () => {
        setShowInfo(false);
    };

    return (
        <React.Fragment>
            {showInfo ? <Info toggleBack={toggleBack} /> : null}
            <div className="gallery-container">
                <Link to="/kahrabiat">
                    <div className="category">
                        <h3 className="category-title">
                            Electro-arabic Spring
                        </h3>
                        <img
                            className="cat-pic"
                            src="/images/kahraba.png"
                            alt="electro-arabic-artists"
                        />
                    </div>
                </Link>

                <Link to="/legends">
                    <div className="category">
                        <h3 className="category-title">Queer Legends</h3>
                        <img
                            className="cat-pic"
                            src="/images/chavela.png"
                            alt="queer-fem-legends"
                        />
                    </div>
                </Link>

                <Link to="/devil-dykes">
                    <div className="category">
                        <h3 className="category-title">Devil's Dykes</h3>
                        <img
                            className="cat-pic"
                            src="/images/2dykes.png"
                            alt="queer-fem-legends"
                        />
                    </div>
                </Link>
                <Link to="/black-pride">
                    <div className="category">
                        <h3 className="category-title">Black Prides</h3>
                        <img
                            className="cat-pic"
                            src="/images/blackSisters.png"
                            alt="Black Prides"
                        />
                    </div>
                </Link>
                <Link to="/wilad">
                    <div className="category">
                        <h3 className="category-title">Children of Night</h3>
                        <img
                            className="cat-pic"
                            src="/images/wiladAlLeil.png"
                            alt="gayboys-here"
                        />
                    </div>
                </Link>
                <Link to="/xodade">
                    <div className="category">
                        <h3 className="category-title">Xodade</h3>
                        <img
                            className="cat-pic"
                            src="/images/xodade.png"
                            alt="xodade"
                        />
                    </div>
                </Link>
                <Link to="/queer">
                    <div className="category">
                        <h3 className="category-title">Queer F***ing Gender</h3>
                        <img
                            className="cat-pic"
                            src="/images/JJBP.png"
                            alt="queer-gender-artists"
                        />
                    </div>
                </Link>
                <Link to="/femi-hip-hop">
                    <div className="category">
                        <h3 className="category-title">Feminist Hip-Hop</h3>
                        <img
                            className="cat-pic"
                            src="/images/fam-hiphop.png"
                            alt="fem-hip-hop"
                        />
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
} //closes cpnt
