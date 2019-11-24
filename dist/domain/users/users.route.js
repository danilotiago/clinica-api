"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
class UsersRoute {
    constructor() {
        this.path = '/users';
    }
    applyRoutes(application) {
        application.get(this.path, users_service_1.usersService.findAll);
        application.post(this.path, users_service_1.usersService.save);
    }
}
exports.usersRoute = new UsersRoute();
