const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
    {
        writer: {
            type: Schema.Types.ObjectId,
            ref: 'User', // 레퍼런스 => user 컬렉션에서 참조해올수있음.
        },
        title: {
            type: String,
            maxLength: 50,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            default: 0,
        },
        images: {
            type: Array,
            default: [],
        },
        sold: {
            type: Number,
            maxLength: 100,
            default: 0,
        },
        continent: {
            type: Number,
            default: 1,
        },
        views: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = { Product };
