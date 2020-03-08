import * as restify from 'restify'
import { specialtiesRepository } from './specialties.repository'
import { NotFoundError } from 'restify-errors'

class SpecialtiesService {

    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return specialtiesRepository.findAll()
            .then(schedules => {
                resp.send(schedules)
                return next()
            })
            .catch(err => next(err))
    }

    findById(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return specialtiesRepository.findById(req.params.id)
            .then(schedule => {
                if (schedule) {
                    resp.send(schedule)
                    return next()
                }
                throw new NotFoundError(`Serviço de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }

    save(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return specialtiesRepository.save(req.body)
            .then(schedule => {
                resp.send(schedule)
                return next()
            })
            .catch(err => next(err))
    }

    update(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return specialtiesRepository.update(req.params.id, req.body)
            .then(schedule => {
                resp.send(schedule)
                return next()
            })
            .catch(err => next(err))
    }

    delete(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return specialtiesRepository.delete(req.params.id)
            .then(result => {
                if (result.n) {
                    resp.send(204)
                    return next()
                }
                throw new NotFoundError(`Serviço de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }
}

export const specialtiesService: SpecialtiesService = new SpecialtiesService()