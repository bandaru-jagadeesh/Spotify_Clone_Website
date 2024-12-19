// File: src/App.js (Frontend - ReactJS)
import React, { useEffect, useState } from 'react';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/songs')
      .then(response => response.json())
      .then(data => setSongs(data));
  }, []);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Spotify Clone</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            {song.title} by {song.artist}
            <button onClick={() => playSong(song)}>Play</button>
          </li>
        ))}
      </ul>
      {currentSong && (
        <div>
          <h2>Now Playing</h2>
          <p>{currentSong.title} by {currentSong.artist}</p>
          <audio controls src={currentSong.url} autoPlay />
        </div>
      )}
    </div>
  );
}

export default App;

