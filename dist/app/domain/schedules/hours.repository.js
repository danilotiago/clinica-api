"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../../repositories/base-repository");
const hour_model_1 = require("./hour.model");
class HoursRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(hour_model_1.Hour);
        this.findAll = () => {
            return this.model.find()
                .populate('patient')
                .populate('professional');
        };
        this.findById = id => {
            return this.model.findById(id)
                .populate('patient')
                .populate('professional');
        };
        this.findAllByDateAndProfessionalId = (date, professionalId) => {
            return this.model.find({ date: date, professional: professionalId });
        };
    }
}
exports.hoursRepository = new HoursRepository();
