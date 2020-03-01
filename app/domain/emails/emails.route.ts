import * as restify from 'restify'
import { IRouter } from "../../routes/irouter"
import { emailsService } from './emails.service'

class EmailsRoute implements IRouter {
    
    path: string = '/emails'

    applyRoutes(application: restify.Server): void {
        application.get(`${this.path}/email-used/:email`, emailsService.emailUsed)
    }
}

export const emailsRouter = new EmailsRoute()