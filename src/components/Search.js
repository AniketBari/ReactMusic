// Search.js
import React, { useState } from 'react';
import axios from 'axios';

function Search({ addToPlaylist }) {
    const [query, setQuery] = useState('');
    const API_KEY = 'AIzaSyBC9pDkA1Q0hMXYwSKxbuk2-qL9sXKB0g4';

    const handleSearch = async () => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    q: query,
                    part: 'snippet',
                    type: 'video',
                    maxResults: 5,
                    key: API_KEY,
                },
            });

            const videos = response.data.items.map((item) => ({
                title: item.snippet.title,
                videoId: item.id.videoId,
            }));

            addToPlaylist(videos);
        } catch (error) {
            console.error('Error searching for videos:', error);
        }
    };

    return (
        <div className="Search">
            <h2>Search</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;
