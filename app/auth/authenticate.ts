import { environment } from './../../config/environment';

import * as restify from 'restify'
import * as jwt from 'jsonwebtoken'
import { NotAuthorizedError } from 'restify-errors'
import { usersRepository } from './../../domain/users/users.repository'

export const authenticate: restify.RequestHandler = (req, resp, next) => {
    
    const { email, password } = req.body

    usersRepository.findByEmail(email, '+password')
        .then(user => {
            
            if (! user || ! user.passwordIsValid(password)) {
                return next(new NotAuthorizedError('Credenciais inválidas'))
            }
            
            const token = jwt.sign({
                sub: user.email,
                iss: 'clinica-app'
            }, environment.security.apiSecret)

            resp.json({
                name: user.name,
                email: user.email,
                accessToken: token
            })

            return next()
        })
        .catch(next)
}