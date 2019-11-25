import { environment } from '../../config/environment'
import * as bcrypt from 'bcrypt'

export const hashPassword = (user, next) => {
    bcrypt.hash(user.password, environment.security.saltRounds)
        .then(hash => {
            user.password = hash
            return next()
        }).catch(next) 
}