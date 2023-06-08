const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const apiRoutes = require('./routes');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRoutes);


module.exports = app;