"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
const base_repository_1 = require("../../app/repository/base-repository");
class UsersRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(user_model_1.User);
    }
}
exports.UsersRepository = UsersRepository;
exports.usersRepository = new UsersRepository();
