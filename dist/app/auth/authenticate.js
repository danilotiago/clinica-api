"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./../../config/environment");
const jwt = __importStar(require("jsonwebtoken"));
const restify_errors_1 = require("restify-errors");
const users_repository_1 = require("../domain/users/users.repository");
exports.authenticate = (req, resp, next) => {
    const { email, password } = req.body;
    users_repository_1.usersRepository.findByEmail(email, '+password')
        .then(user => {
        if (!user || !user.passwordIsValid(password)) {
            return next(new restify_errors_1.NotAuthorizedError('Credenciais inválidas'));
        }
        const token = jwt.sign({
            sub: user.email,
            iss: 'clinica-app'
        }, environment_1.environment.security.apiSecret);
        resp.json({
            name: user.name,
            email: user.email,
            accessToken: token
        });
        return next();
    })
        .catch(next);
};
