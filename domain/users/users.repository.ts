import { User } from './user.model'
import { BaseRepository } from '../../app/repositories/base-repository'

class UsersRepository extends BaseRepository<User> {
    constructor() {
        super(User)
    }
}

export const usersRepository: UsersRepository = new UsersRepository()