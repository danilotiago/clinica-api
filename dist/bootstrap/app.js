"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_middlewares_1 = require("./../app/middlewares/default-middlewares");
const register_routes_1 = require("../app/routes/register-routes");
const mongoose = require("mongoose");
const environment_1 = require("./../config/environment");
const server_1 = require("./../server");
class App {
    constructor() {
        this.application = server_1.application;
    }
    bootstrap() {
        return new Promise((resolve, reject) => {
            try {
                this.initDatabase()
                    .then(() => {
                    this.initRoutes();
                    default_middlewares_1.defaultMiddlewares.applyMiddlewares(this.application);
                    this.application.listen(environment_1.environment.server.port, () => {
                        resolve(this.application);
                    });
                })
                    .catch(err => {
                    console.log('Falha ao se conectar com o banco de dados');
                    console.log(err);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    initDatabase() {
        return mongoose.connect(environment_1.environment.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }
    initRoutes() {
        register_routes_1.routes.forEach(route => route.applyRoutes(this.application));
    }
}
exports.App = App;
