import * as restify from 'restify'
import { IRouter } from '../../routes/irouter'
import { professionalsService } from './professionals.service'

class ProfessionalsRoute implements IRouter {
    
    path: string = '/professionals'

    applyRoutes(application: restify.Server) {
        application.get(this.path, professionalsService.findAll)
        application.get(`${this.path}/:id`, professionalsService.findById)
        application.post(this.path, professionalsService.save)
        application.put(`${this.path}/:id`, professionalsService.update)
        application.del(`${this.path}/:id`, professionalsService.delete)
    }
}
export const professionalsRoute = new ProfessionalsRoute()