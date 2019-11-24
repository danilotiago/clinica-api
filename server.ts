import * as restify from 'restify'
import { API_VERSION } from './config/api-version'

export const application: restify.Server = restify.createServer({
    name: 'clinica-api',
    version: API_VERSION
})