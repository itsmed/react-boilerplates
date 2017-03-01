const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const publicPath = path.resolve(__dirname, 'public');

const app = express();
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(8080, () => console.log('server listening on port 8080'))
