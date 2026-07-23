const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/app/:id', async (req, res) => {
  const appId = req.params.id;
  try {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=${appId}`);
    const appData = response.data.results[0];
    res.json({
      name: appData.trackName,
      version: appData.version,
      rating: appData.averageUserRating,
      reviews: appData.userRatingCount,
      updated: appData.currentVersionReleaseDate,
      icon: appData.artworkUrl100,
      description: appData.description,
      developer: appData.artistName
    });
  } catch (err) {
    res.status(500).json({ error: 'App not found' });
  }
});

app.listen(port, () => {
  console.log(`App Release Dashboard running on port ${port}`);
});