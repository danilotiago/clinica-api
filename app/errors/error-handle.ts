import * as restify from 'restify'

export const handleError = (req: restify.Request, resp: restify.Response, err, done) => {

    let timestamp = Date.now
    let status = 400
    let error = 'Error'
    let message = err.message
    let path = req.url

    switch (err.name) {
        case 'MongoError':
            if (err.code === 11000) {
                err.statusCode = 400
                error = 'Erro de integridade referencial'
            }
        break
        case 'ValidationError':
            err.statusCode = 400
            error = 'Erro de validação'
        break
    }

    err.toJSON = () => {
        return {timestamp, status, error, message, path}
    }

    done()
}