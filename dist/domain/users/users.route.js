"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
class UsersRoute {
    constructor() {
        this.path = '/users';
    }
    applyRoutes(application) {
        application.get(this.path, users_service_1.usersService.findAll);
        application.get(`${this.path}/:id`, users_service_1.usersService.findById);
        application.post(this.path, users_service_1.usersService.save);
        application.put(`${this.path}/:id`, users_service_1.usersService.update);
        application.del(`${this.path}/:id`, users_service_1.usersService.delete);
    }
}
exports.usersRoute = new UsersRoute();
