const express = require('express');
const nba = require('nba');
const cors = require('cors');

const app = express();

app.use(cors());

app.get(`/`, (req, res) => {

  res.send('Dream is a top 5 all-time player.');
});

const PORT = 3004;

app.listen(PORT, () => {
  console.info(`listening on ${PORT}...`);
});
