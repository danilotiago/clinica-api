import { User } from './user.model'
import { BaseRepository } from '../../repositories/base-repository'

class UsersRepository extends BaseRepository<User> {
    constructor() {
        super(User)
    }

    findAll = (partialName?: String) => {
        if (partialName) {
            return this.model.find({name: {$regex: partialName, $options: 'i'}})
        } else {
            return this.model.find()
        }
    }

    findByEmail = (email, projection = null) => {
        return this.model.findOne({email}, projection)
    }
}

export const usersRepository: UsersRepository = new UsersRepository()