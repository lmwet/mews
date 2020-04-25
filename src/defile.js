import React, { useEffect, useState } from "react";

export default function Defile(props) {
    const images = useSelector((state) => state && state.images);
    const [images, setImages] = useState([]);


    const goToArtist;

    useEffect(() => {
      
        {
            images &&
                images.map((image, index) => {
                    return (
                        <div className="images-div" key={index}>
                            <a
                                // onClick={goToArtist}
                                // className="spotify-url"
                                href={image.parentElement}
                            >
                                <img className="defile-pic" src={image.currentSrc} />
                                <p className="artist-name">{image.alt}</p>
                            </a>
                        </div>
                    );
                });
        } //closes images.map
    }, [images]);
} //closes cpnt
