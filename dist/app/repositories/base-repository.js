"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(model) {
        this.findAll = () => {
            return this.model.find();
        };
        this.save = data => {
            let object = new this.model(data);
            return object.save();
        };
        this.model = model;
    }
}
exports.BaseRepository = BaseRepository;
