const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.status(400).json({ success: false, err });

        return res.status(200).json({ success: true }); // 회원 등록이라 딱히 정보를 넘길 필요는 없어보임
    });
});

module.exports = router;
