"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
class BaseRepository {
    constructor(model) {
        this.findAll = () => {
            return this.model.find();
        };
        this.findById = id => {
            return this.model.findById(id);
        };
        this.save = data => {
            let object = new this.model(data);
            return object.save();
        };
        this.update = (id, data) => {
            return this.model.countDocuments({ _id: id }).exec()
                .then(found => {
                if (!found) {
                    throw new restify_errors_1.NotFoundError(`Usuário de ID: ${id} não encontrado`);
                }
                return this.model.findByIdAndUpdate(id, data, {
                    new: true,
                    runValidators: true
                });
            });
        };
        this.delete = id => {
            return this.model.deleteOne({ _id: id }).exec();
        };
        this.model = model;
    }
}
exports.BaseRepository = BaseRepository;
