"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
const base_repository_1 = require("../../repositories/base-repository");
class UsersRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(user_model_1.User);
        this.findAll = (partialName) => {
            if (partialName) {
                return this.model.find({ name: { $regex: partialName, $options: 'i' } });
            }
            else {
                return this.model.find();
            }
        };
        this.findByEmail = (email, projection = null) => {
            return this.model.findOne({ email }, projection);
        };
    }
}
exports.usersRepository = new UsersRepository();
