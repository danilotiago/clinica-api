import * as restify from 'restify'
import { NotFoundError } from 'restify-errors'
import { professionalsRepository } from './professionals.repository'

class ProfessionalsService {
    
    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.findAll()
            .then(users => {
                resp.send(users)
                return next()
            })
            .catch(err => next(err))
    }

    findById(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.findById(req.params.id)
            .then(user => {
                if (user) {
                    resp.send(user)
                    return next()
                }
                throw new NotFoundError(`Profissional de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }

    save(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.save(req.body)
            .then(user => {
                resp.send(user)
                return next()
            })
            .catch(err => next(err))
    }

    update(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.update(req.params.id, req.body)
            .then(user => {
                resp.send(user)
                return next()
            })
            .catch(err => next(err))
    }

    delete(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.delete(req.params.id)
            .then(result => {
                if (result.n) {
                    resp.send(204)
                    return next()
                }
                throw new NotFoundError(`Profissional de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }
}
export const professionalsService = new ProfessionalsService()