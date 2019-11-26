"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
exports.authenticateValidator = (req, resp, next) => {
    let hasError = false;
    const badRequestError = new restify_errors_1.BadRequestError();
    badRequestError.name = 'ValidationError';
    if (!req.body) {
        hasError = true;
        badRequestError.message = 'O e-mail e senha são obrigatórios';
    }
    if (!req.body.email) {
        hasError = true;
        badRequestError.message = 'O e-mail é obrigatório';
    }
    if (!req.body.password) {
        hasError = true;
        badRequestError.message = 'A senha é obrigatória';
    }
    if (hasError) {
        return next(badRequestError);
    }
    return next();
};
