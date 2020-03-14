"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../../repositories/base-repository");
const schedules_model_1 = require("./schedules.model");
class SchedulesRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(schedules_model_1.Schedule);
        this.findAll = () => {
            return this.model.find()
                .populate('patient')
                .populate('professional')
                .populate('specialty')
                .populate('procedures');
        };
        this.findById = id => {
            return this.model.findById(id)
                .populate('patient')
                .populate('professional')
                .populate('specialty')
                .populate('procedures');
        };
    }
}
exports.schedulesRepository = new SchedulesRepository();
