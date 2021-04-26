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
      const response = await axios.get(`${YOUTUBE_PLAYLIST_ENDPOINT}&part=snippet&playistId=PLGYCCr2uMxfUzajLjrdIjINR8HIqfTrxT&maxResults=50`);
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
