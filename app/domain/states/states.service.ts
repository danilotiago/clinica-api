import * as restify from 'restify'
import { statesRepository } from './states.repository';

class StatesService {

    findAll(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return statesRepository.findAll()
            .then(states => {
                resp.send(states)
                return next()
            })
            .catch(err => next(err))
    }
}

export const statesService: StatesService = new StatesService()