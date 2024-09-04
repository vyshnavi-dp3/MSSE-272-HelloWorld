const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello');
});

const port = 8000;
app.listen(port, () => {
    console.log(`Hello Server is running on port:${port}`);
});