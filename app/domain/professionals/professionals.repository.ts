import { Professional } from './professional.model'
import { BaseRepository } from '../../repositories/base-repository'

class ProfessionalsRepository extends BaseRepository<Professional> {
    constructor() {
        super(Professional)
    }
}

export const professionalsRepository: ProfessionalsRepository = new ProfessionalsRepository()