"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = require("./users.repository");
class UsersService {
    findAll(req, resp, next) {
        return users_repository_1.usersRepository.findAll()
            .then(users => {
            resp.send(users);
            return next();
        })
            .catch(err => next(err));
    }
    save(req, resp, next) {
        return users_repository_1.usersRepository.save(req.body)
            .then(user => {
            user.password = undefined;
            resp.send(user);
            return next();
        })
            .catch(err => next(err));
    }
}
exports.usersService = new UsersService();
