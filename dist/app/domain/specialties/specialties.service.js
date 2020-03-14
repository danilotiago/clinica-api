"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialties_repository_1 = require("./specialties.repository");
const restify_errors_1 = require("restify-errors");
class SpecialtiesService {
    findAll(req, resp, next) {
        return specialties_repository_1.specialtiesRepository.findAll()
            .then(specialties => {
            resp.send(specialties);
            return next();
        })
            .catch(err => next(err));
    }
    findById(req, resp, next) {
        return specialties_repository_1.specialtiesRepository.findById(req.params.id)
            .then(specialty => {
            if (specialty) {
                resp.send(specialty);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Serviço de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
    save(req, resp, next) {
        return specialties_repository_1.specialtiesRepository.save(req.body)
            .then(specialty => {
            resp.send(specialty);
            return next();
        })
            .catch(err => next(err));
    }
    update(req, resp, next) {
        return specialties_repository_1.specialtiesRepository.update(req.params.id, req.body)
            .then(specialty => {
            resp.send(specialty);
            return next();
        })
            .catch(err => next(err));
    }
    delete(req, resp, next) {
        return specialties_repository_1.specialtiesRepository.delete(req.params.id)
            .then(result => {
            if (result.n) {
                resp.send(204);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Serviço de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
}
exports.specialtiesService = new SpecialtiesService();
