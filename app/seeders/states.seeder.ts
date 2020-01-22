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
            name: 'São Paulo',
            abbreviation: 'SP'
        })
        
        statesRepository.save({
            name: 'Paraná',
            abbreviation: 'PR'
        })
    }
}

export const stateSeeder: StateSeeder = new StateSeeder() 