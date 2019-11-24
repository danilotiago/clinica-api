import * as restify from 'restify'
import { usersRepository } from './users.repository'

class UsersService {
    
    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return usersRepository.findAll()
            .then(users => {
                resp.send(users)
                return next()
            })
            .catch(err => next(err))
    }

    save(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return usersRepository.save(req.body)
            .then(user => {
                user.password = undefined
                resp.send(user)
                return next()
            })
            .catch(err => next(err))
    }
}
export const usersService = new UsersService()