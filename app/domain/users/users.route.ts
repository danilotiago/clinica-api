import * as restify from 'restify'
import { usersService } from './users.service'
import { IRouter } from './../../routes/irouter'

class UsersRoute implements IRouter {
    
    path: string = '/users'

    applyRoutes(application: restify.Server) {
        application.get(this.path, usersService.findAll)
        application.get(`${this.path}/:id`, usersService.findById)
        application.post(this.path, usersService.save)
        application.put(`${this.path}/:id`, usersService.update)
        application.del(`${this.path}/:id`, usersService.delete)
    }
}
export const usersRoute = new UsersRoute()