"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professional_model_1 = require("./professional.model");
const base_repository_1 = require("../../repositories/base-repository");
class ProfessionalsRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(professional_model_1.Professional);
    }
}
exports.professionalsRepository = new ProfessionalsRepository();
