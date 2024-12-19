// File: server.js (Backend - ExpressJS)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Simulated song data
const songs = [
  { id: 1, title: "Song One", artist: "Artist A", url: "http://example.com/song1.mp3" },
  { id: 2, title: "Song Two", artist: "Artist B", url: "http://example.com/song2.mp3" },
  { id: 3, title: "Song Three", artist: "Artist C", url: "http://example.com/song3.mp3" },
];

app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});