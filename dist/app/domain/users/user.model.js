"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_model_1 = require("./address.model");
const mongoose = __importStar(require("mongoose"));
const bcrypt = __importStar(require("bcrypt"));
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
    birthDate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    profiles: {
        type: [String],
        required: false
    },
    address: {
        type: address_model_1.addressSchema,
        required: false
    },
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
