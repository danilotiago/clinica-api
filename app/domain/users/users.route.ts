import * as restify from 'restify'
import { usersService } from './users.service'
import { IRouter } from './../../routes/irouter'

class UsersRoute implements IRouter {
    
    pathClient: string = '/users/client'
    pathProfessional: string = '/users/professional'

    applyRoutes(application: restify.Server) {
        application.get(this.pathClient, usersService.findAll)
        application.get(`${this.pathClient}/:id`, usersService.findById)
        application.post(this.pathClient, usersService.save)
        application.put(`${this.pathClient}/:id`, usersService.update)
        application.del(`${this.pathClient}/:id`, usersService.delete)
    }
}
export const usersRoute = new UsersRoute()