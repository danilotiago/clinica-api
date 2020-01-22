"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const states_service_1 = require("./states.service");
class StatesRoute {
    constructor() {
        this.path = '/states';
    }
    applyRoutes(application) {
        application.get(this.path, states_service_1.statesService.findAll);
    }
}
exports.statesRoute = new StatesRoute();
