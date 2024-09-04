const express = require('express');
const axios = require('axios');
const app = express();

const helloServiceUrl = 'http://hello-service:80/hello';
const worldServiceUrl = 'http://world-service:80/world';

app.get('/helloworld', async (req, res) => {
    try {
        const helloResponse = await axios.get(helloServiceUrl);
        const worldResponse = await axios.get(worldServiceUrl);
        const helloWorld = `${helloResponse.data} ${worldResponse.data}`;
        res.send(helloWorld);
    } catch (error) {
        res.status(500).send('Error occurred while fetching data from services');
    }
});

const port = 8002;
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
