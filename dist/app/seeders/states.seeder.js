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

        statesRepository.save({
            name: 'Acre',
            abbreviation: 'AC'
        })

        statesRepository.save({
            name: 'Alagoas',
            abbreviation: 'AL'
        })

        statesRepository.save({
            name: 'Amapá',
            abbreviation: 'AP'
        })

        statesRepository.save({
            name: 'Amazonas',
            abbreviation: 'AM'
        })

        statesRepository.save({
            name: 'Bahia',
            abbreviation: 'BA'
        })

        statesRepository.save({
            name: 'Ceará',
            abbreviation: 'CE'
        })

        statesRepository.save({
            name: 'Distrito Federal',
            abbreviation: 'DF'
        })

        statesRepository.save({
            name: 'Espírito Santo',
            abbreviation: 'ES'
        })

        statesRepository.save({
            name: 'Goiás',
            abbreviation: 'GO'
        })

        statesRepository.save({
            name: 'Maranhão',
            abbreviation: 'MA'
        })

        statesRepository.save({
            name: 'Mato Grosso',
            abbreviation: 'MT'
        })

        statesRepository.save({
            name: 'Mato Grosso do Sul',
            abbreviation: 'MS'
        })

        statesRepository.save({
            name: 'Minas Gerais',
            abbreviation: 'MG'
        })

        statesRepository.save({
            name: 'Pará',
            abbreviation: 'PA'
        })

        statesRepository.save({
            name: 'Paraíba',
            abbreviation: 'PB'
        })

        statesRepository.save({
            name: 'Paraná',
            abbreviation: 'PR'
        })

        statesRepository.save({
            name: 'Pernambuco',
            abbreviation: 'PE'
        })

        statesRepository.save({
            name: ' Piauí',
            abbreviation: 'PI'
        })

        statesRepository.save({
            name: 'Rio de Janeiro',
            abbreviation: 'RJ'
        })

        statesRepository.save({
            name: 'Rio Grande do Norte',
            abbreviation: 'RN'
        })

        statesRepository.save({
            name: 'Rio Grande do Sul',
            abbreviation: 'RS'
        })

        statesRepository.save({
            name: 'Rondônia',
            abbreviation: 'RO'
        })

        statesRepository.save({
            name: 'Roraima',
            abbreviation: 'RR'
        })

        statesRepository.save({
            name: 'Santa Catarina',
            abbreviation: 'SC'
        })

        states_repository_1.statesRepository.save({
            name: 'São Paulo',
            abbreviation: 'SP'
        })

        statesRepository.save({
            name: 'Sergipe',
            abbreviation: 'SE'
        })

        statesRepository.save({
            name: 'Tocantis',
            abbreviation: 'TO'
        })
    }
}
exports.stateSeeder = new StateSeeder();
