"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = require("./users.repository");
class UsersService {
    findAll(req, resp, next) {
        return users_repository_1.usersRepository.findAll()
            .then(users => resp.send(users));
    }
}
exports.UsersService = UsersService;
exports.usersService = new UsersService();
