const express = require('express');
const app = express();

app.get('/world', (req, res) => {
    res.send('World');
});

const port = 8001;

