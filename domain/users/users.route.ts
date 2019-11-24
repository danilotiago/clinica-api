import { usersService } from './users.service';
import * as restify from 'restify'
import { IRouter } from '../../app/routes/irouter'

class UsersRoute implements IRouter {
    
    applyRoutes(application: restify.Server) {
        
        application.get('/users', usersService.findAll)
    }
}
export const usersRoute = new UsersRoute()