require('dotenv').config();
const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const { mongo } = require('./config/config');

mongoose
    .connect(mongo.url)
    .then(() => {
        const server = http.createServer(app);
        server.listen(port, () => console.log(`Server listening on port:${port}`));
    })
    .catch(error => console.error(error));
