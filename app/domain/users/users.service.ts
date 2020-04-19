import * as restify from 'restify'
import { usersRepository } from './users.repository'
import { NotFoundError } from 'restify-errors'
import { Profiles } from '../../enums/Profiles.enum'
import { User } from './user.model'

class UsersService {
    
    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        
        return usersRepository.findAll(req.query.like)
            .then(users => {
                resp.send(users)
                return next()
            })
            .catch(err => next(err))
    }

    findById(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return usersRepository.findById(req.params.id)
            .then(user => {
                if (user) {
                    resp.send(user)
                    return next()
                }
                throw new NotFoundError(`Usuário de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }

    save(req: restify.Request, resp: restify.Response, next: restify.Next) {
        req.body['profiles'] = [Profiles.Client]
        return usersRepository.save(req.body)
            .then(user => {
                user.password = undefined
                resp.send(user)
                return next()
            })
            .catch(err => next(err))
    }

    update(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return usersRepository.update(req.params.id, req.body)
            .then(user => {
                user.password = undefined
                resp.send(user)
                return next()
            })
            .catch(err => next(err))
    }

    delete(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return usersRepository.delete(req.params.id)
            .then(result => {
                if (result.n) {
                    resp.send(204)
                    return next()
                }
                throw new NotFoundError(`Usuário de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }

    changeProfiles(userId: string, profiles: Profiles[]) {
        usersRepository.findById(userId).then(async user => {
            user.profiles = profiles
            await User.findByIdAndUpdate(userId, user, {
                new: true,
                runValidators: true
            })
        })
    }
}
export const usersService = new UsersService()