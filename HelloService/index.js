const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Hello Service listening on port ${port}`);
});
