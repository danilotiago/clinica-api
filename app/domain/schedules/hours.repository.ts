import { BaseRepository } from '../../repositories/base-repository'
import { Hour } from './hour.model'


class HoursRepository extends BaseRepository<Hour> {
    constructor() {
        super(Hour)
    }

    findAll = () => {
        return this.model.find()
            .populate('patient')
            .populate('professional')
    }

    findById = id => {
        return this.model.findById(id)
            .populate('patient')
            .populate('professional')
    }

    findAllByDateAndProfessionalId = (date: Date, professionalId: String) => {
        return this.model.find({date: date, professional: professionalId})
    }
}

export const hoursRepository: HoursRepository = new HoursRepository()