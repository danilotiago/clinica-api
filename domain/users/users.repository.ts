import { User } from './user.model'
import { BaseRepository } from '../../app/repository/base-repository'

export class UsersRepository extends BaseRepository<User> {
    constructor() {
        super(User)
    }
}

export const usersRepository: UsersRepository = new UsersRepository()