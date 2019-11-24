"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersRoute {
    applyRoutes(application) {
        application.get('/users', (req, resp, next) => {
            resp.json('im alive !');
        });
    }
}
exports.usersRoute = new UsersRoute();
