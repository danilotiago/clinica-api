"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schedules_service_1 = require("./schedules.service");
class SchedulesRoute {
    constructor() {
        this.path = '/schedules';
    }
    applyRoutes(application) {
        application.get(this.path, schedules_service_1.schedulesService.findAll);
        application.get(`${this.path}/:id`, schedules_service_1.schedulesService.findById);
        application.post(this.path, schedules_service_1.schedulesService.save);
        application.put(`${this.path}/:id`, schedules_service_1.schedulesService.update);
        application.get(`${this.path}/scheduled-times`, schedules_service_1.schedulesService.findScheduledTimesByDateAndProfessionalId);
        //application.del(`${this.path}/:id`, schedulesService.delete)
    }
}
exports.schedulesRoute = new SchedulesRoute();
