import { NotFoundError } from 'restify-errors'
import * as mongoose from 'mongoose'

export abstract class BaseRepository<D extends mongoose.Document> {

    model: mongoose.Model<D>

    constructor(model: mongoose.Model<D>) {
        this.model = model
    }

    findAll = () => {
        return this.model.find()
    }

    findById = id => {
        return this.model.findById(id)
    }

    save = data => {
        let object = new this.model(data)
        return object.save()
    }

    update = (id: string, data: string) => {
        return this.model.countDocuments({_id: id}).exec()
            .then(found => {
                if (! found) {
                    throw new NotFoundError(`Usuário de ID: ${id} não encontrado`)
                } 
                return this.model.findByIdAndUpdate(id, data, {
                    new: true,
                    runValidators: true
                })
            })
    }

    delete = id => {
        return this.model.deleteOne({_id: id}).exec()
    }
}