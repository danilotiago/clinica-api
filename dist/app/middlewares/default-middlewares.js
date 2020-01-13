"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = require("./../../config/cors");
const restify = __importStar(require("restify"));
const error_handle_1 = require("../errors/error-handle");
class DefaultMiddlewares {
    applyMiddlewares(application) {
        application.use(restify.plugins.queryParser());
        application.use(restify.plugins.bodyParser());
        application.pre(cors_1.cors.preflight);
        application.use(cors_1.cors.actual);
        application.on('restifyError', error_handle_1.handleError);
    }
}
exports.DefaultMiddlewares = DefaultMiddlewares;
exports.defaultMiddlewares = new DefaultMiddlewares();
