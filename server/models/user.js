const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRound = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});

userSchema.pre('save', function (next) {
    let user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(saltRound, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);

                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

userSchema.methods.comparePassWord = function (plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

userSchema.methods.generateToken = function (callback) {
    let user = this;
    let token = jwt.sign(user._id.toHexString(), 'secret');
    user.token = token;

    user.save(function (err, user) {
        if (err) return callback(err);
        callback(null, user);
    });
};

userSchema.statics.findByToken = function (token, callback) {
    let user = this;

    jwt.verify(token, 'secret', function (err, decoded) {
        user.findOne({ _id: decoded, token: token }, function (err, user) {
            if (err) return callback(err);

            callback(err, user);
        });
    });
};
const User = mongoose.model('User', userSchema);
module.exports = { User };
