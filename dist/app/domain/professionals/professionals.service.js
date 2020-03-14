"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const professionals_repository_1 = require("./professionals.repository");
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
            .then(professional => {
            resp.send(professional);
            return next();
        })
            .catch(err => next(err));
    }
    update(req, resp, next) {
        return professionals_repository_1.professionalsRepository.update(req.params.id, req.body)
            .then(professional => {
            resp.send(professional);
            return next();
        })
            .catch(err => next(err));
    }
    delete(req, resp, next) {
        return professionals_repository_1.professionalsRepository.delete(req.params.id)
            .then(result => {
            if (result.n) {
                resp.send(204);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Profissional de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
}
exports.professionalsService = new ProfessionalsService();
