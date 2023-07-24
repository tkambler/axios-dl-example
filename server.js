const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const file = path.resolve(__dirname, 'stuff.tar.gz');

app.route('/api/dl')
  .get((req, res, next) => {
    res.download(file, 'stuff.tar.gz');
  });

app.listen(7025);