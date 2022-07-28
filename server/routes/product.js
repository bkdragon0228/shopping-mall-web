const express = require('express');
const router = express.Router();
const multer = require('multer');

const { Product } = require('../models/product');
const { auth } = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //저장위치
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage: storage }).single('file');
// 이미지 서버에 저장
router.post('/images', (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({
            success: true,
            filePath: res.req.file.path,
            fileName: res.req.file.filename,
        });
    });
});

// 데이터 업로드
router.post('/upload', (req, res) => {
    const product = new Product(req.body);

    product.save((err) => {
        if (err) return res.status(400).json({ success: false, err });

        return res.status(200).json({ success: true });
    });
});

router.post('/products', (req, res) => {
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;
    let limit = req.body.limit ? parseInt(req.body.limit) : 16;

    Product.find()
        .populate('writer')
        .skip(skip)
        .limit(limit)
        .exec((err, productsInfo) => {
            if (err) return res.status(400).json({ success: false, err });

            return res.status(200).json({
                success: true,
                productsInfo,
                postSize: productsInfo.length,
            });
        });
});
module.exports = router; // 이거 자꾸 까먹네.
