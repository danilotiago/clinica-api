"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const states_repository_1 = require("./../domain/states/states.repository");
class StateSeeder {
    run() {
        states_repository_1.statesRepository.findAll()
            .then(states => {
            if (!states.length)
                this.createStates();
        });
    }
    createStates() {
        states_repository_1.statesRepository.save({
            name: 'Acre',
            abbreviation: 'AC'
        });
        states_repository_1.statesRepository.save({
            name: 'Alagoas',
            abbreviation: 'AL'
        });
        states_repository_1.statesRepository.save({
            name: 'Amapá',
            abbreviation: 'AP'
        });
        states_repository_1.statesRepository.save({
            name: 'Amazonas',
            abbreviation: 'AM'
        });
        states_repository_1.statesRepository.save({
            name: 'Bahia',
            abbreviation: 'BA'
        });
        states_repository_1.statesRepository.save({
            name: 'Ceará',
            abbreviation: 'CE'
        });
        states_repository_1.statesRepository.save({
            name: 'Distrito Federal',
            abbreviation: 'DF'
        });
        states_repository_1.statesRepository.save({
            name: 'Espírito Santo',
            abbreviation: 'ES'
        });
        states_repository_1.statesRepository.save({
            name: 'Goiás',
            abbreviation: 'GO'
        });
        states_repository_1.statesRepository.save({
            name: 'Maranhão',
            abbreviation: 'MA'
        });
        states_repository_1.statesRepository.save({
            name: 'Mato Grosso',
            abbreviation: 'MT'
        });
        states_repository_1.statesRepository.save({
            name: 'Mato Grosso do Sul',
            abbreviation: 'MS'
        });
        states_repository_1.statesRepository.save({
            name: 'Minas Gerais',
            abbreviation: 'MG'
        });
        states_repository_1.statesRepository.save({
            name: 'Pará',
            abbreviation: 'PA'
        });
        states_repository_1.statesRepository.save({
            name: 'Paraíba',
            abbreviation: 'PB'
        });
        states_repository_1.statesRepository.save({
            name: 'Paraná',
            abbreviation: 'PR'
        });
        states_repository_1.statesRepository.save({
            name: 'Pernambuco',
            abbreviation: 'PE'
        });
        states_repository_1.statesRepository.save({
            name: ' Piauí',
            abbreviation: 'PI'
        });
        states_repository_1.statesRepository.save({
            name: 'Rio de Janeiro',
            abbreviation: 'RJ'
        });
        states_repository_1.statesRepository.save({
            name: 'Rio Grande do Norte',
            abbreviation: 'RN'
        });
        states_repository_1.statesRepository.save({
            name: 'Rio Grande do Sul',
            abbreviation: 'RS'
        });
        states_repository_1.statesRepository.save({
            name: 'Rondônia',
            abbreviation: 'RO'
        });
        states_repository_1.statesRepository.save({
            name: 'Roraima',
            abbreviation: 'RR'
        });
        states_repository_1.statesRepository.save({
            name: 'Santa Catarina',
            abbreviation: 'SC'
        });
        states_repository_1.statesRepository.save({
            name: 'São Paulo',
            abbreviation: 'SP'
        });
        states_repository_1.statesRepository.save({
            name: 'Sergipe',
            abbreviation: 'SE'
        });
        states_repository_1.statesRepository.save({
            name: 'Tocantis',
            abbreviation: 'TO'
        });
    }
}
exports.stateSeeder = new StateSeeder();
