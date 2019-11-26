import * as restify from 'restify'
import { IRouter } from '../../app/routes/irouter'
import { authenticate } from './authenticate'
import { authenticateValidator } from './validators/authenticate.validator'

class AuthRoute implements IRouter {
    
    path: string = '/users'

    applyRoutes(application: restify.Server) {
        application.post('/authenticate', [authenticateValidator, authenticate])
    }
}
export const authRoute = new AuthRoute()