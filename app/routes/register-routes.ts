import { IRouter } from './irouter'
import { authRoute } from '../auth/auth.route'
import { usersRoute } from './../domain/users/users.route'
import { statesRoute } from '../domain/states/states.route'

/**
 * registro de resources
 * 
 */
export const routes: IRouter[] = [
    authRoute,
    usersRoute,
    statesRoute
]