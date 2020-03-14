import { BaseRepository } from '../../repositories/base-repository'
import { Procedure } from './procedures.model'

class ProceduresRepository extends BaseRepository<Procedure> {
    constructor() {
        super(Procedure)
    }
}

export const proceduresRepository: ProceduresRepository = new ProceduresRepository()