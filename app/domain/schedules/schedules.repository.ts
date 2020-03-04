import { BaseRepository } from '../../repositories/base-repository'
import { Schedule } from './schedules.model'


class SchedulesRepository extends BaseRepository<Schedule> {
    constructor() {
        super(Schedule)
    }
}

export const schedulesRepository: SchedulesRepository = new SchedulesRepository()