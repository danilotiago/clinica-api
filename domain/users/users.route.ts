import * as restify from 'restify'
import { usersService } from './users.service'
import { IRouter } from '../../app/routes/irouter'

class UsersRoute implements IRouter {
    
    path: string = '/users'

    applyRoutes(application: restify.Server) {
        application.get(this.path, usersService.findAll)
        application.post(this.path, usersService.save)
    }
}
export const usersRoute = new UsersRoute()