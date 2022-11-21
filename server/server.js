const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let tweets = [];

app.get('/new-tweet', (req, res) => {
    const tweet = req.query.tweet;
    tweets.push(tweet);
    console.log(tweet)
    res.json({ status: 'ok' });
})

app.get('/tweets', (req, res) => {
    res.json({ tweets });
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})