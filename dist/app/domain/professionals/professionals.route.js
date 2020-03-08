"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professionals_service_1 = require("./professionals.service");
class ProfessionalsRoute {
    constructor() {
        this.path = '/professionals';
    }
    applyRoutes(application) {
        application.get(this.path, professionals_service_1.professionalsService.findAll);
        application.get(`${this.path}/:id`, professionals_service_1.professionalsService.findById);
        application.post(this.path, professionals_service_1.professionalsService.save);
        application.put(`${this.path}/:id`, professionals_service_1.professionalsService.update);
        application.del(`${this.path}/:id`, professionals_service_1.professionalsService.delete);
    }
}
exports.professionalsRoute = new ProfessionalsRoute();
