"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const api_version_1 = require("./config/api-version");
exports.application = restify.createServer({
    name: 'clinica-api',
    version: api_version_1.API_VERSION
});
