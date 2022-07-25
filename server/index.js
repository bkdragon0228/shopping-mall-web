const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
const config = require('./config/dev');

mongoose
    .connect(config.mongoURI, {})
    .then(() => console.log('DB connection'))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('hello server');
});

app.listen(port, () => {
    console.log(`server start to ${port}`);
});
