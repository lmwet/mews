import React from "react";

export default function Defile({ artists }) {
    // const goToArtist;

    return (
        <div className="defile-div container-fluid">
            <div className="row flex-row flex-nowrap">
                {artists &&
                    artists.map((artist) => (
                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg-3"
                            key={artist.name}
                        >
                            <div className="card card-block">
                                <a href={`#${artist.name}`}>
                                    <img
                                        className="defile-pic"
                                        src={artist.imgUrl}
                                    />
                                    <p className="artist-name">
                                        {artist.engTitle}
                                    </p>
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
} //closes cpnt
