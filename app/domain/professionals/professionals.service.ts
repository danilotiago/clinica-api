import * as restify from 'restify'
import { NotFoundError } from 'restify-errors'
import { professionalsRepository } from './professionals.repository'
import { usersService } from '../users/users.service'
import { Profiles } from '../../enums/Profiles.enum'

class ProfessionalsService {
    
    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.findAll()
            .then(professionals => {
                resp.send(professionals)
                return next()
            })
            .catch(err => next(err))
    }

    findById(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.findById(req.params.id)
            .then(professional => {
                if (professional) {
                    resp.send(professional)
                    return next()
                }
                throw new NotFoundError(`Profissional de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
    }

    save(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.save(req.body)
            .then(async professional => {
                const profiles = [Profiles.Client, Profiles.Professional]
                await usersService.changeProfiles(req.body.user, profiles)
                resp.send(professional)
                return next()
            })
            .catch(err => next(err))
    }

    update(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return professionalsRepository.update(req.params.id, req.body)
            .then(async professional => {
                const profiles = [Profiles.Client, Profiles.Professional]
                await usersService.changeProfiles(professional.user.id, profiles)
                resp.send(professional)
                return next()
            })
            .catch(err => next(err))
    }

    delete(req: restify.Request, resp: restify.Response, next: restify.Next) {
        professionalsRepository.findById(req.params.id)
        .then(professional => {
            professionalsRepository.delete(req.params.id)
            .then(async result => {
                if (result.n) {
                    const profiles = [Profiles.Client]
                    await usersService.changeProfiles(professional.user.id, profiles)

                    resp.send(204)
                    return next()
                }
                throw new NotFoundError(`Profissional de ID: ${req.params.id} não encontrado`)
            })
            .catch(err => next(err))
        })
        .catch(err => next(err))
    }
}
export const professionalsService = new ProfessionalsService()