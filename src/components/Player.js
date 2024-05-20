// Player.js
import React, { useState } from 'react';

function Player({ playlist }) {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const playVideo = (index) => {
        setCurrentVideoIndex(index);
    };

    return (
        <div className="Player">
            <h2>Player</h2>
            {playlist.length > 0 ? (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div>
                        <h3>{playlist[currentVideoIndex].title}</h3>
                        <button onClick={() => playVideo((currentVideoIndex - 1 + playlist.length) % playlist.length)}>Previous</button>
                        <button onClick={() => playVideo((currentVideoIndex + 1) % playlist.length)}>Next</button>
                    </div>
                </div>
            ) : (
                <p>No videos in playlist.</p>
            )}
        </div>
    );
}

export default Player;
