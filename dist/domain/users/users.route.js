"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
class UsersRoute {
    applyRoutes(application) {
        application.get('/users', users_service_1.usersService.findAll);
    }
}
exports.usersRoute = new UsersRoute();
