import corsMiddleware from 'restify-cors-middleware';

const corsOptions: corsMiddleware.Options = {
    preflightMaxAge: 86400,
    origins: ['*'],
    allowHeaders: ['authorization'],
    exposeHeaders: ['x-custom-header']
}

export const cors: corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions)
