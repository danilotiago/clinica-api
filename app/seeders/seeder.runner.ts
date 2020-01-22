import { ISeeder } from './iseeder';
import { stateSeeder } from './states.seeder';

class SeederRunner {

    seeders: [ISeeder] = [
        stateSeeder
    ]

    runSeeders() {
        this.seeders.forEach(seeder => seeder.run())
    }
}

export const seederRunner: SeederRunner = new SeederRunner()

