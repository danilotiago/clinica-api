"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
class UsersRoute {
    constructor() {
        this.pathClient = '/users/client';
        this.pathProfessional = '/users/professional';
    }
    applyRoutes(application) {
        application.get(this.pathClient, users_service_1.usersService.findAll);
        application.get(`${this.pathClient}/:id`, users_service_1.usersService.findById);
        application.post(this.pathClient, users_service_1.usersService.save);
        application.put(`${this.pathClient}/:id`, users_service_1.usersService.update);
        application.del(`${this.pathClient}/:id`, users_service_1.usersService.delete);
    }
}
exports.usersRoute = new UsersRoute();
