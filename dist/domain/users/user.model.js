"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const hash_password_1 = require("./hash-password");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        select: false,
        required: true
    }
});
/**
 * middlewares pre => mongoose
 *
 */
userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    hash_password_1.hashPassword(this, next);
});
userSchema.pre('findOneAndUpdate', function (next) {
    if (!this.getUpdate().password) {
        return next();
    }
    hash_password_1.hashPassword(this.getUpdate(), next);
});
userSchema.methods.passwordIsValid = function (password) {
    return bcrypt.compareSync(password, this.password);
};
exports.User = mongoose.model('User', userSchema);
