import { IRouter } from './irouter'
import { usersRoute } from '../../domain/users/users.route'
import { authRoute } from '../auth/auth.route'

/**
 * registro de resources
 * 
 */
export const routes: IRouter[] = [
    authRoute,
    usersRoute
]