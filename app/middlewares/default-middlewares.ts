import * as restify from 'restify'

export class DefaultMiddlewares {

    applyMiddlewares (application: restify.Server) {

        application.use(restify.plugins.queryParser())
        application.use(restify.plugins.bodyParser())
    }
}

export const defaultMiddlewares: DefaultMiddlewares = new DefaultMiddlewares()