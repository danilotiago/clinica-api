"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const schedules_repository_1 = require("./schedules.repository");
const Status_enum_1 = require("../../enums/Status.enum");
class SchedulesService {
    findAll(req, resp, next) {
        return schedules_repository_1.schedulesRepository.findAll()
            .then(schedules => {
            resp.send(schedules);
            return next();
        })
            .catch(err => next(err));
    }
    findById(req, resp, next) {
        return schedules_repository_1.schedulesRepository.findById(req.params.id)
            .then(schedule => {
            if (schedule) {
                resp.send(schedule);
                return next();
            }
            throw new restify_errors_1.NotFoundError(`Usuário de ID: ${req.params.id} não encontrado`);
        })
            .catch(err => next(err));
    }
    save(req, resp, next) {
        req.body['status'] = Status_enum_1.Status.Pending;
        return schedules_repository_1.schedulesRepository.save(req.body)
            .then(schedule => {
            resp.send(schedule);
            return next();
        })
            .catch(err => next(err));
    }
    update(req, resp, next) {
        return schedules_repository_1.schedulesRepository.update(req.params.id, req.body)
            .then(schedule => {
            resp.send(schedule);
            return next();
        })
            .catch(err => next(err));
    }
}
exports.schedulesService = new SchedulesService();
