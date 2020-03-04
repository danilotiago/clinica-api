"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../../repositories/base-repository");
const schedules_model_1 = require("./schedules.model");
class SchedulesRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(schedules_model_1.Schedule);
    }
}
exports.schedulesRepository = new SchedulesRepository();
