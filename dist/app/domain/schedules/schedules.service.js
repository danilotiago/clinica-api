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
const schedules_repository_1 = require("./schedules.repository");
const Status_enum_1 = require("../../enums/Status.enum");
const hours_repository_1 = require("./hours.repository");
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
            .then((schedule) => __awaiter(this, void 0, void 0, function* () {
            yield exports.schedulesService.saveScheduledHour(schedule);
            resp.send(schedule);
            return next();
        }))
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
    findScheduledTimesByDateAndProfessionalId(req, resp, next) {
        const date = req.query.date;
        const professionalId = req.query.professionalId;
        return hours_repository_1.hoursRepository.findAllByDateAndProfessionalId(date, professionalId)
            .then(hours => {
            resp.send(hours);
            return next();
        })
            .catch(err => next(err));
    }
    saveScheduledHour(schedule) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = { schedule: schedule };
            data.patient = schedule.patient;
            data.professional = schedule.professional;
            data.date = schedule.requestDate;
            data.hour = schedule.requestHour;
            yield hours_repository_1.hoursRepository.save(data);
        });
    }
}
exports.schedulesService = new SchedulesService();
