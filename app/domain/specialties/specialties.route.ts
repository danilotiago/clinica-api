import * as restify from 'restify' 
import { IRouter } from '../../routes/irouter'
import { specialtiesService } from './specialties.service'

class SpecialtiesRoute implements IRouter {

    path: string = '/specialties'
    
    applyRoutes(application: restify.Server): void {
        application.get(this.path, specialtiesService.findAll)
        application.get(`${this.path}/:id`, specialtiesService.findById)
        application.post(this.path, specialtiesService.save)
        application.put(`${this.path}/:id`, specialtiesService.update)
        application.del(`${this.path}/:id`, specialtiesService.delete)
    }
}

export const specialtiesRoute: SpecialtiesRoute = new SpecialtiesRoute()