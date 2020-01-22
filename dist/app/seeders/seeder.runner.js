"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const states_seeder_1 = require("./states.seeder");
class SeederRunner {
    constructor() {
        this.seeders = [
            states_seeder_1.stateSeeder
        ];
    }
    runSeeders() {
        this.seeders.forEach(seeder => seeder.run());
    }
}
exports.seederRunner = new SeederRunner();
