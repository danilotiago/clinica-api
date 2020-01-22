"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const states_repository_1 = require("./states.repository");
class StatesService {
    findAll(req, resp, next) {
        return states_repository_1.statesRepository.findAll()
            .then(states => {
            resp.send(states);
            return next();
        })
            .catch(err => next(err));
    }
}
exports.statesService = new StatesService();
