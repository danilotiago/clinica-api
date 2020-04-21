import * as restify from 'restify'
import { IRouter } from '../../routes/irouter'
import { schedulesService } from './schedules.service'

class SchedulesRoute implements IRouter {
    
    path: string = '/schedules'

    applyRoutes(application: restify.Server) {
        application.get(this.path, schedulesService.findAll)
        application.get(`${this.path}/:id`, schedulesService.findById)
        application.post(this.path, schedulesService.save)
        application.put(`${this.path}/:id`, schedulesService.update)

        application.get(`${this.path}/scheduled-times`, schedulesService.findScheduledTimesByDateAndProfessionalId)
        //application.del(`${this.path}/:id`, schedulesService.delete)
    }
}
export const schedulesRoute = new SchedulesRoute()