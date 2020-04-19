"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = require("./users.repository");
const restify_errors_1 = require("restify-errors");
const Profiles_enum_1 = require("../../enums/Profiles.enum");
const user_model_1 = require("./user.model");
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
    changeProfiles(userId, profiles) {
        users_repository_1.usersRepository.findById(userId).then((user) => __awaiter(this, void 0, void 0, function* () {
            user.profiles = profiles;
            yield user_model_1.User.findByIdAndUpdate(userId, user, {
                new: true,
                runValidators: true
            });
        }));
    }
}
exports.usersService = new UsersService();
