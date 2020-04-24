import React, { useState } from "react";

export function usePlay(trackId) {
    const [tracks, setTracks] = useState();

    const submitTrack = () => {
        setTracks({
            ...tracks,
            trackId,
        });
    };
    return { tracks, submitTrack };
}
