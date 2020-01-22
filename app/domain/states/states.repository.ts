import { State } from './state.model'
import { BaseRepository } from '../../repositories/base-repository'


class StatesRepository extends BaseRepository<State> {
    constructor() {
        super(State)
    }
}

export const statesRepository: StatesRepository = new StatesRepository()