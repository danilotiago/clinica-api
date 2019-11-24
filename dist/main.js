"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./bootstrap/app");
const app = new app_1.App();
app.bootstrap()
    .then(server => {
    console.log(`Aplicação iniciada na porta: ${server.address().port}`);
}).catch(err => {
    console.log('Falha ao iniciar a aplicação');
    console.log(err);
    process.exit(1);
});
