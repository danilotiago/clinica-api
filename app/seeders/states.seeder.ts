import { State } from './../domain/states/state.model';
import { statesRepository } from './../domain/states/states.repository';
import { ISeeder } from './iseeder';

class StateSeeder implements ISeeder {
    
    run(): void {
        
        statesRepository.findAll()
            .then(states => {
                if (! states.length) this.createStates()
            })
    }

    createStates(): void {

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

        statesRepository.save({
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

export const stateSeeder: StateSeeder = new StateSeeder() 