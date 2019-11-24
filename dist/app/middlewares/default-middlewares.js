"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const error_handle_1 = require("../errors/error-handle");
class DefaultMiddlewares {
    applyMiddlewares(application) {
        application.use(restify.plugins.queryParser());
        application.use(restify.plugins.bodyParser());
        application.on('restifyError', error_handle_1.handleError);
    }
}
exports.DefaultMiddlewares = DefaultMiddlewares;
exports.defaultMiddlewares = new DefaultMiddlewares();
