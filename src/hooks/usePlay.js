import { useState } from "react";

export function usePlay() {
    const [embedUrl, setCurrentTrack] = useState();

    const handleclick = (e) => {
        e.preventDefault();
        const elem = e.target;
        let url = elem.getAttribute("href");
        const embedUrl = url.replace("track", "embed/track");
        setCurrentTrack(embedUrl);
    };
    return { embedUrl, handleclick };
}
