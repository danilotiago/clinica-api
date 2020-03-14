import { BaseRepository } from '../../repositories/base-repository'
import { Schedule } from './schedules.model'


class SchedulesRepository extends BaseRepository<Schedule> {
    constructor() {
        super(Schedule)
    }

    findAll = () => {
        return this.model.find()
            .populate('patient')
            .populate('professional')
            .populate('specialty')
            .populate('procedures')
        
    }

    findById = id => {
        return this.model.findById(id)
            .populate('patient')
            .populate('professional')
            .populate('specialty')
            .populate('procedures')
    }
}

export const schedulesRepository: SchedulesRepository = new SchedulesRepository()