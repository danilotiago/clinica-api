"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encrypt_password_1 = require("./encrypt-password");
const mongoose = require("mongoose");
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
    encrypt_password_1.hashPassword(this, next);
});
exports.User = mongoose.model('User', userSchema);
