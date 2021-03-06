const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;

const YOUTUBE_PLAYLIST_ENDPOINT = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${process.env.YOUTUBE_API_KEY}`;

app.get('/backend/:playlist', async (req, res) => {
  const {playlist} = req.params;

  if(playlist === 'react') {
    try {
      const response = await axios.get(`${YOUTUBE_PLAYLIST_ENDPOINT}&part=snippet&playlistId=PLGYCCr2uMxfUzajLjrdIjINR8HIqfTrxT&maxResults=50`);
      res.json(response.data);
    } catch(error) {
      console.log(error);
    }
  } else if(playlist === 'projects') {
    try {
      const response = await axios.get(`${YOUTUBE_PLAYLIST_ENDPOINT}&part=snippet&playlistId=PLGYCCr2uMxfVkjtUwF9vw_q6b98DzMVkI&maxResults=50`);
      res.json(response.data);
    } catch(error) {
      console.log(error);
    }
  } else if(playlist === 'nodejs') {
    try {
      const response = await axios.get(`${YOUTUBE_PLAYLIST_ENDPOINT}&part=snippet&playlistId=PLGYCCr2uMxfUA1T7p1-C26mGusGAJauM5&maxResults=50`);
      res.json(response.data);
    } catch(error) {
      console.log(error);
    }
  }
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
