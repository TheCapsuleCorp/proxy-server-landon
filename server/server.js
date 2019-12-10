const express = require('express');
const path = require('path');

app = express();

app.use(express.static(`${__dirname}/../public`));

app.get('/rooms/:roomId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = app;
