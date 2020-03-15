"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const Actions_enum_1 = require("../enums/Actions.enum");
class BaseRepository {
    constructor(model) {
        this.findAll = () => {
            return this.model.find();
        };
        this.findById = id => {
            return this.model.findById(id);
        };
        this.save = data => {
            data = Object.assign(Object.assign({}, data), this.defineTimestamps(data, Actions_enum_1.Actions.CREATE));
            let object = new this.model(data);
            return object.save();
        };
        this.update = (id, data) => {
            return this.model.countDocuments({ _id: id }).exec()
                .then(found => {
                if (!found) {
                    throw new restify_errors_1.NotFoundError(`Recurso de ID: ${id} não encontrado`);
                }
                data = Object.assign(Object.assign({}, data), this.defineTimestamps(data, Actions_enum_1.Actions.UPDATE));
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
    defineTimestamps(object, action) {
        if (action === Actions_enum_1.Actions.CREATE) {
            object['createdAt'] = new Date();
            object['updatedAt'] = null;
        }
        if (action === Actions_enum_1.Actions.UPDATE) {
            object['updatedAt'] = new Date();
        }
        return object;
    }
}
exports.BaseRepository = BaseRepository;
