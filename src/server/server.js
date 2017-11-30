const truths =require('./truth.json');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const SERVER_DELAY = 5000;
app.get('/get-truth', (req, res) => {
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    const randomDelay = Math.random() * SERVER_DELAY;
    const failure = Math.random() < 0.33;

    setTimeout(() => {
        if (failure) {
            res.status(503).end();
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ truth: randomTruth }));
    }, randomDelay);
});

app.listen(3000, () => console.log('Truth Server listening locally on port 3000!'));