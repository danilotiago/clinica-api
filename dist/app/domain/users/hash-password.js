"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./../../../config/environment");
const bcrypt = __importStar(require("bcrypt"));
exports.hashPassword = (user, next) => {
    bcrypt.hash(user.password, environment_1.environment.security.saltRounds)
        .then(hash => {
        user.password = hash;
        return next();
    }).catch(next);
};
