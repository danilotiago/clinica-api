import * as restify from 'restify'
import { NotFoundError } from 'restify-errors'
import { schedulesRepository } from './schedules.repository'
import { Status } from '../../enums/Status.enum'

class SchedulesService {
    
    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return schedulesRepository.findAll()
            .then(schedules => {
                resp.send(schedules)
                return next()
            })
            .catch(err => next(err))
    }

    findById(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return schedulesRepository.findById(req.params.id)
            .then(schedule => {
                if (schedule) {
                    resp.send(schedule)
                    return next()
                }
                throw new NotFoundError(`Usuário de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }

    save(req: restify.Request, resp: restify.Response, next: restify.Next) {
        req.body['status'] = Status.Pending

        return schedulesRepository.save(req.body)
            .then(schedule => {
                resp.send(schedule)
                return next()
            })
            .catch(err => next(err))
    }

    update(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return schedulesRepository.update(req.params.id, req.body)
            .then(schedule => {
                resp.send(schedule)
                return next()
            })
            .catch(err => next(err))
    }

    /*
    delete(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return schedulesRepository.delete(req.params.id)
            .then(result => {
                if (result.n) {
                    resp.send(204)
                    return next()
                }
                throw new NotFoundError(`Usuário de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }*/
}
export const schedulesService = new SchedulesService()