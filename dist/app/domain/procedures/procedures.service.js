"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const procedures_repository_1 = require("./procedures.repository");
const restify_errors_1 = require("restify-errors");
class ProceduresService {
    findAll(req, resp, next) {
        return procedures_repository_1.proceduresRepository.findAll()
            .then(procedures => {
            resp.send(procedures);
            return next();
        })
            .catch(err => next(err));
    }
    findById(req, resp, next) {
        return procedures_repository_1.proceduresRepository.findById(req.params.id)
            .then(procedure => {
            if (procedure) {
                resp.send(procedure);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Procedimento de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
    save(req, resp, next) {
        return procedures_repository_1.proceduresRepository.save(req.body)
            .then(procedure => {
            resp.send(procedure);
            return next();
        })
            .catch(err => next(err));
    }
    update(req, resp, next) {
        return procedures_repository_1.proceduresRepository.update(req.params.id, req.body)
            .then(procedure => {
            resp.send(procedure);
            return next();
        })
            .catch(err => next(err));
    }
    delete(req, resp, next) {
        return procedures_repository_1.proceduresRepository.delete(req.params.id)
            .then(result => {
            if (result.n) {
                resp.send(204);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Procedimento de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
}
exports.proceduresService = new ProceduresService();
