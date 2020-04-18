"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = require("./users.repository");
const restify_errors_1 = require("restify-errors");
const Profiles_enum_1 = require("../../enums/Profiles.enum");
class UsersService {
    findAll(req, resp, next) {
        return users_repository_1.usersRepository.findAll(req.query.like)
            .then(users => {
            resp.send(users);
            return next();
        })
            .catch(err => next(err));
    }
    findById(req, resp, next) {
        return users_repository_1.usersRepository.findById(req.params.id)
            .then(user => {
            if (user) {
                resp.send(user);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Usuário de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
    save(req, resp, next) {
        req.body['profiles'] = [Profiles_enum_1.Profiles.Client];
        return users_repository_1.usersRepository.save(req.body)
            .then(user => {
            user.password = undefined;
            resp.send(user);
            return next();
        })
            .catch(err => next(err));
    }
    update(req, resp, next) {
        return users_repository_1.usersRepository.update(req.params.id, req.body)
            .then(user => {
            user.password = undefined;
            resp.send(user);
            return next();
        })
            .catch(err => next(err));
    }
    delete(req, resp, next) {
        return users_repository_1.usersRepository.delete(req.params.id)
            .then(result => {
            if (result.n) {
                resp.send(204);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Usuário de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
}
exports.usersService = new UsersService();
