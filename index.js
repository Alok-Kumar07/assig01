const express = require('express');
const axios = require('axios');
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/top-tickers', async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = response.data;

    // Get the top 10 tickers
    const topTickers = Object.keys(tickers)
      .slice(0, 10)
      .map((key) => ({
        name: tickers[key].name,
        last: tickers[key].last,
        buy: tickers[key].buy,
        sell: tickers[key].sell,
        volume: tickers[key].volume,
        base_unit: tickers[key].base_unit
      }));

    res.json(topTickers);
  } catch (error) {
    res.status(500).send('Error fetching tickers');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
