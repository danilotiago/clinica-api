import * as restify from 'restify'
import { IRouter } from './../../config/routes/irouter'

class UsersRoute implements IRouter {
    
    applyRoutes(application: restify.Server) {
        
        application.get('/users', (req, resp, next) => {
            resp.json('im alive !')
        })
    }

}
export const usersRoute = new UsersRoute()