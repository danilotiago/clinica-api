"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_model_1 = require("./state.model");
const base_repository_1 = require("../../repositories/base-repository");
class StatesRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(state_model_1.State);
    }
}
exports.statesRepository = new StatesRepository();
