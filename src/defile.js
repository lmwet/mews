import React from "react";

export default function Defile({ artists }) {
    return (
        <div className="defile-div">
            {artists &&
                artists.map((artist) => (
                    <div className="card-block" key={artist.name}>
                        <p className="artist-name">{artist.engTitle}</p>
                        <a href={`#${artist.name}`}>
                            <img className="defile-pic" src={artist.imgUrl} />
                        </a>
                    </div>
                ))}
        </div>
    );
}
