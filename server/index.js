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
// 모델
const { User } = require('./models/user');

mongoose
    .connect(config.mongoURI, {})
    .then(() => console.log('DB connection'))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('hello server');
});

app.post('/register', (req, res) => {
    const user = new User();
    user.save((err, userInfo) => {
        if (err) return res.status(400).json({ success: false, err });

        return res.status(200).json({ success: true }); // 회원 등록이라 딱히 정보를 넘길 필요는 없어보임
    });
});

app.listen(port, () => {
    console.log(`server start to ${port}`);
});
