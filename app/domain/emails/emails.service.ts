import * as restify from 'restify'
import { usersRepository } from '../users/users.repository'

class EmailsService {

    emailUsed(req: restify.Request, resp: restify.Response, next: restify.Next) {
        return usersRepository.findByEmail(req.params.email)
            .then(user => {
                let emailUsed: Boolean = false
                if (user) {
                    emailUsed = true
                }
                resp.send({emailUsed: emailUsed})
                return next()
            })
            .catch(err => next(err))
    }
}

export const emailsService: EmailsService = new EmailsService()