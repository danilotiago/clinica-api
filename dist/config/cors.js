"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_cors_middleware_1 = __importDefault(require("restify-cors-middleware"));
const corsOptions = {
    preflightMaxAge: 86400,
    origins: ['*'],
    allowHeaders: ['authorization'],
    exposeHeaders: ['x-custom-header']
};
exports.cors = restify_cors_middleware_1.default(corsOptions);
