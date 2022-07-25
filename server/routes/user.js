const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

const { auth } = require('../middleware/auth');

const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.status(400).json({ success: false, err });

        return res.status(200).json({ success: true }); // 회원 등록이라 딱히 정보를 넘길 필요는 없어보임
    });
});

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, userInfo) => {
        if (!userInfo) {
            return res.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.',
            });
        }

        userInfo.comparePassWord(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: '비밀번호가 틀렸습니다.',
                });
            }
        });

        userInfo.generateToken((err, user) => {
            if (err) return res.status(400).send(arr);

            res.cookie('x_auth', user.token)
                .status(200)
                .json({ loginSuccess: true, userId: user._id });
        });
    });
});

router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        role: req.user.role,
        image: req.user.image,
    });
});

router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true,
        });
    });
});
module.exports = router;
