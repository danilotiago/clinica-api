import * as restify from 'restify'

export interface IRouter {
    applyRoutes(application: restify.Server);
}