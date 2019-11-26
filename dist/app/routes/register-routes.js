"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_route_1 = require("../../domain/users/users.route");
const auth_route_1 = require("../auth/auth.route");
/**
 * registro de resources
 *
 */
exports.routes = [
    auth_route_1.authRoute,
    users_route_1.usersRoute
];
