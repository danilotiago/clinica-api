"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../../repositories/base-repository");
const procedures_model_1 = require("./procedures.model");
class ProceduresRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(procedures_model_1.Procedure);
    }
}
exports.proceduresRepository = new ProceduresRepository();
