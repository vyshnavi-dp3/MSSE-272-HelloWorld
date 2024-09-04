const express = require('express');
const app = express();

app.get('/world', (req, res) => {
    res.send('World');
});

const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Hello Service listening on port ${port}`);
});
