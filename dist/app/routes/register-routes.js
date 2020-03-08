"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_route_1 = require("../auth/auth.route");
const users_route_1 = require("./../domain/users/users.route");
const states_route_1 = require("../domain/states/states.route");
const emails_route_1 = require("../domain/emails/emails.route");
const schedules_route_1 = require("../domain/schedules/schedules.route");
const specialties_route_1 = require("../domain/specialties/specialties.route");
/**
 * registro de resources
 *
 */
exports.routes = [
    auth_route_1.authRoute,
    users_route_1.usersRoute,
    states_route_1.statesRoute,
    emails_route_1.emailsRouter,
    schedules_route_1.schedulesRoute,
    specialties_route_1.specialtiesRoute
];
