"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(model) {
        this.findAll = () => {
            return this.model.find();
        };
        this.model = model;
    }
}
exports.BaseRepository = BaseRepository;
