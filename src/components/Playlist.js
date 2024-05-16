// Playlist.js
import React from 'react';

function Playlist({ playlist, removeFromPlaylist }) {
    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            <ul>
                {playlist.map((video, index) => (
                    <li key={index}>
                        {video.title}
                        <button onClick={() => removeFromPlaylist(video.videoId)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;
