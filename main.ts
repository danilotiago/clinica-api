import { App } from './bootstrap/app'

const app = new App()

app.bootstrap()
    .then(server => {
        console.log(`Aplicação iniciada na porta: ${server.address().port}`)
    }).catch(err => {
        console.log('Falha ao iniciar a aplicação');
        console.log(err);
        process.exit(1);
    })