// App.js
import React, { useState } from 'react';
import Player from './components/Player';
import Playlist from './components/Playlist';
import Search from './components/Search';
import './App.css';

function App() {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (videos) => {
    setPlaylist([...playlist, ...videos]);
  };

  const removeFromPlaylist = (videoId) => {
    setPlaylist(playlist.filter((video) => video.videoId !== videoId));
  };

  return (
    <div className="App">
      <h1>React Music App</h1>
      <Search addToPlaylist={addToPlaylist} />
      <Player playlist={playlist} />
      <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
    </div>
  );
}

export default App;
