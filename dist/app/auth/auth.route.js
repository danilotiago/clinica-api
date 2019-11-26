"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticate_1 = require("./authenticate");
const authenticate_validator_1 = require("./validators/authenticate.validator");
class AuthRoute {
    constructor() {
        this.path = '/users';
    }
    applyRoutes(application) {
        application.post('/authenticate', [authenticate_validator_1.authenticateValidator, authenticate_1.authenticate]);
    }
}
exports.authRoute = new AuthRoute();
