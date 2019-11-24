import * as restify from 'restify'
import { handleError } from '../errors/error-handle'

export class DefaultMiddlewares {

    applyMiddlewares (application: restify.Server) {

        application.use(restify.plugins.queryParser())
        application.use(restify.plugins.bodyParser())
        
        application.on('restifyError', handleError)
    }
}

export const defaultMiddlewares: DefaultMiddlewares = new DefaultMiddlewares()