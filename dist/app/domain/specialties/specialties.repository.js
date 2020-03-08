"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../../repositories/base-repository");
const specialty_model_1 = require("./specialty.model");
class SpecialtiesRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(specialty_model_1.Specialty);
    }
}
exports.specialtiesRepository = new SpecialtiesRepository();
