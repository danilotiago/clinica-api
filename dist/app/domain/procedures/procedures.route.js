"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const procedures_service_1 = require("./procedures.service");
class SpecialtiesRoute {
    constructor() {
        this.path = '/procedures';
    }
    applyRoutes(application) {
        application.get(this.path, procedures_service_1.proceduresService.findAll);
        application.get(`${this.path}/:id`, procedures_service_1.proceduresService.findById);
        application.post(this.path, procedures_service_1.proceduresService.save);
        application.put(`${this.path}/:id`, procedures_service_1.proceduresService.update);
        application.del(`${this.path}/:id`, procedures_service_1.proceduresService.delete);
    }
}
exports.proceduresRoute = new SpecialtiesRoute();
