import * as restify from 'restify' 
import { IRouter } from '../../routes/irouter'
import { proceduresService } from './procedures.service'

class SpecialtiesRoute implements IRouter {

    path: string = '/procedures'
    
    applyRoutes(application: restify.Server): void {
        application.get(this.path, proceduresService.findAll)
        application.get(`${this.path}/:id`, proceduresService.findById)
        application.post(this.path, proceduresService.save)
        application.put(`${this.path}/:id`, proceduresService.update)
        application.del(`${this.path}/:id`, proceduresService.delete)
    }
}

export const proceduresRoute: SpecialtiesRoute = new SpecialtiesRoute()