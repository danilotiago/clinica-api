import * as restify from 'restify'
import { usersRepository } from './users.repository'

export class UsersService {
    
    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return usersRepository.findAll()
            .then(users => resp.send(users))
    }
}
export const usersService = new UsersService()