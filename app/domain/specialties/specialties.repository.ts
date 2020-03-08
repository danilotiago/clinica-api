import { BaseRepository } from '../../repositories/base-repository'
import { Specialty } from './specialty.model'

class SpecialtiesRepository extends BaseRepository<Specialty> {
    constructor() {
        super(Specialty)
    }
}

export const specialtiesRepository: SpecialtiesRepository = new SpecialtiesRepository()