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
            name: 'São Paulo',
            abbreviation: 'SP'
        });
        states_repository_1.statesRepository.save({
            name: 'Paraná',
            abbreviation: 'PR'
        });
    }
}
exports.stateSeeder = new StateSeeder();
