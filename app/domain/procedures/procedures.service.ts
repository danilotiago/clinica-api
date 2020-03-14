import * as restify from 'restify'
import { proceduresRepository } from './procedures.repository'
import { NotFoundError } from 'restify-errors'

class ProceduresService {

    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return proceduresRepository.findAll()
            .then(procedures => {
                resp.send(procedures)
                return next()
            })
            .catch(err => next(err))
    }

    findById(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return proceduresRepository.findById(req.params.id)
            .then(procedure => {
                if (procedure) {
                    resp.send(procedure)
                    return next()
                }
                throw new NotFoundError(`Procedimento de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }

    save(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return proceduresRepository.save(req.body)
            .then(procedure => {
                resp.send(procedure)
                return next()
            })
            .catch(err => next(err))
    }

    update(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return proceduresRepository.update(req.params.id, req.body)
            .then(procedure => {
                resp.send(procedure)
                return next()
            })
            .catch(err => next(err))
    }

    delete(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return proceduresRepository.delete(req.params.id)
            .then(result => {
                if (result.n) {
                    resp.send(204)
                    return next()
                }
                throw new NotFoundError(`Procedimento de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }
}

export const proceduresService: ProceduresService = new ProceduresService()