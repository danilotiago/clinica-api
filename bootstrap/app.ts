import { defaultMiddlewares } from './../app/middlewares/default-middlewares'
import { routes } from '../app/routes/register-routes'
import * as restify from 'restify'
import mongoose from 'mongoose'
import { environment } from './../config/environment'
import { application } from './../server'
import { seederRunner } from '../app/seeders/seeder.runner'

export class App {

    private application: restify.Server = application

    bootstrap(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.initDatabase()
                    .then(() => {
                        this.initRoutes()
                        this.runSeeders()
                        defaultMiddlewares.applyMiddlewares(this.application)

                        this.application.listen(environment.server.port, () => {
                            resolve(this.application)
                        })
                    })
                    .catch(err => {
                        console.log('Falha ao se conectar com o banco de dados')
                        console.log(err)
                    })
            } catch (err) {
                reject(err)
            }
        })
    }

    private initDatabase(): Promise<mongoose.Mongoose> {
        return mongoose.connect(environment.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    }

    private initRoutes() {
        routes.forEach(route => route.applyRoutes(this.application))
    }

    private runSeeders() {
        seederRunner.runSeeders()
    }
}