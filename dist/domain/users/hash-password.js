"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("../../config/environment");
const bcrypt = require("bcrypt");
exports.hashPassword = (user, next) => {
    bcrypt.hash(user.password, environment_1.environment.security.saltRounds)
        .then(hash => {
        user.password = hash;
        return next();
    }).catch(next);
};
