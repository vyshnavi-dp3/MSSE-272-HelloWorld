const express = require('express');
const axios = require('axios');
const app = express();

const helloServiceUrl = 'http://localhost:8000/hello';
const worldServiceUrl = 'http://localhost:8001/world';

app.get('/helloworld', async (req, res) => {
    try {
        const helloResponse = await axios.get(helloServiceUrl);
        const worldResponse = await axios.get(worldServiceUrl);

        const helloWorld = `${helloResponse.data} ${worldResponse.data}`;
        res.send(helloWorld);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching data from services');
    }
});

const port = process.env.PORT || 8002;
app.listen(port, () => {
    console.log(`Hello World Service listening on port ${port}`);
});
