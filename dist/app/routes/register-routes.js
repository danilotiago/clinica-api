"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_route_1 = require("../auth/auth.route");
const users_route_1 = require("./../domain/users/users.route");
const states_route_1 = require("../domain/states/states.route");
/**
 * registro de resources
 *
 */
exports.routes = [
    auth_route_1.authRoute,
    users_route_1.usersRoute,
    states_route_1.statesRoute
];
