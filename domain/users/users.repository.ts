import { User } from './user.model'
import { BaseRepository } from '../../app/repositories/base-repository'

class UsersRepository extends BaseRepository<User> {
    constructor() {
        super(User)
    }

    findByEmail = (email, projection = null) => {
        return this.model.findOne({email}, projection)
    }
}

export const usersRepository: UsersRepository = new UsersRepository()