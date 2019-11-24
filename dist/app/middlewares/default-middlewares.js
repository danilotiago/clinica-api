"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
class DefaultMiddlewares {
    applyMiddlewares(application) {
        application.use(restify.plugins.queryParser());
        application.use(restify.plugins.bodyParser());
    }
}
exports.DefaultMiddlewares = DefaultMiddlewares;
exports.defaultMiddlewares = new DefaultMiddlewares();
