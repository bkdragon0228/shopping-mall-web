const express = require('express');
const app = express();
const port = 5000;
// 몽구스
const mongoose = require('mongoose');
const config = require('./config/dev');
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 라우트 분리
app.use('/api/users', require('./routes/user'));
app.use('/api/products', require('./routes/product'));

// 정적인 파일 제공
app.use('/uploads', express.static('uploads'));

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
