import { Professional } from './professional.model'
import { BaseRepository } from '../../repositories/base-repository'

class ProfessionalsRepository extends BaseRepository<Professional> {
    constructor() {
        super(Professional)
    }

    findAll = () => {
        return this.model.find().populate('user').populate('specialties')
    }

    findById = id => {
        return this.model.findById(id).populate('user').populate('specialties')
    }
}

export const professionalsRepository: ProfessionalsRepository = new ProfessionalsRepository()