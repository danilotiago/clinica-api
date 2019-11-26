import * as restify from 'restify'
import { BadRequestError } from 'restify-errors'

export const authenticateValidator: restify.RequestHandler = (req, resp, next) => {
    
    let hasError: boolean = false
    
    const badRequestError = new BadRequestError()
    badRequestError.name = 'ValidationError'
    
    if (! req.body) {
        hasError = true
        badRequestError.message = 'O e-mail e senha são obrigatórios'
    }

    if (! req.body.email) {
        hasError = true
        badRequestError.message = 'O e-mail é obrigatório'
    }

    if (! req.body.password) {
        hasError = true
        badRequestError.message = 'A senha é obrigatória'
    }

    if (hasError) {
        return next(badRequestError)
    }

    return next()
}