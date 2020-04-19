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
const restify_errors_1 = require("restify-errors");
const professionals_repository_1 = require("./professionals.repository");
const users_service_1 = require("../users/users.service");
const Profiles_enum_1 = require("../../enums/Profiles.enum");
class ProfessionalsService {
    findAll(req, resp, next) {
        return professionals_repository_1.professionalsRepository.findAll()
            .then(professionals => {
            resp.send(professionals);
            return next();
        })
            .catch(err => next(err));
    }
    findById(req, resp, next) {
        return professionals_repository_1.professionalsRepository.findById(req.params.id)
            .then(professional => {
            if (professional) {
                resp.send(professional);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Profissional de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
    save(req, resp, next) {
        return professionals_repository_1.professionalsRepository.save(req.body)
            .then((professional) => __awaiter(this, void 0, void 0, function* () {
            const profiles = [Profiles_enum_1.Profiles.Client, Profiles_enum_1.Profiles.Professional];
            yield users_service_1.usersService.changeProfiles(req.body.user, profiles);
            resp.send(professional);
            return next();
        }))
            .catch(err => next(err));
    }
    update(req, resp, next) {
        return professionals_repository_1.professionalsRepository.update(req.params.id, req.body)
            .then((professional) => __awaiter(this, void 0, void 0, function* () {
            const profiles = [Profiles_enum_1.Profiles.Client, Profiles_enum_1.Profiles.Professional];
            yield users_service_1.usersService.changeProfiles(professional.user.id, profiles);
            resp.send(professional);
            return next();
        }))
            .catch(err => next(err));
    }
    delete(req, resp, next) {
        professionals_repository_1.professionalsRepository.findById(req.params.id)
            .then(professional => {
            professionals_repository_1.professionalsRepository.delete(req.params.id)
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result.n) {
                    const profiles = [Profiles_enum_1.Profiles.Client];
                    yield users_service_1.usersService.changeProfiles(professional.user.id, profiles);
                    resp.send(204);
                    return next();
                }
                throw new restify_errors_1.NotFoundError(`Profissional de ID: ${req.params.id} não encontrado`);
            }))
                .catch(err => next(err));
        })
            .catch(err => next(err));
    }
}
exports.professionalsService = new ProfessionalsService();
