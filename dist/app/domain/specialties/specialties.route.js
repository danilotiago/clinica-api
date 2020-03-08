"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialties_service_1 = require("./specialties.service");
class SpecialtiesRoute {
    constructor() {
        this.path = '/specialties';
    }
    applyRoutes(application) {
        application.get(this.path, specialties_service_1.specialtiesService.findAll);
        application.get(`${this.path}/:id`, specialties_service_1.specialtiesService.findById);
        application.post(this.path, specialties_service_1.specialtiesService.save);
        application.put(`${this.path}/:id`, specialties_service_1.specialtiesService.update);
        application.del(`${this.path}/:id`, specialties_service_1.specialtiesService.delete);
    }
}
exports.specialtiesRoute = new SpecialtiesRoute();
