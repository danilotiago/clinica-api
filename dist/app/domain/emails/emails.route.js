"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emails_service_1 = require("./emails.service");
class EmailsRoute {
    constructor() {
        this.path = '/emails';
    }
    applyRoutes(application) {
        application.get(`${this.path}/email-used/:email`, emails_service_1.emailsService.emailUsed);
    }
}
exports.emailsRouter = new EmailsRoute();
