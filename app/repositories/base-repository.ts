import { NotFoundError } from 'restify-errors'
import * as mongoose from 'mongoose'
import { Actions } from '../enums/Actions.enum'

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
        data = {...data, ...this.defineTimestamps(data, Actions.CREATE)}
        let object = new this.model(data)
        return object.save()
    }

    update = (id: string, data: Object) => {
        return this.model.countDocuments({_id: id}).exec()
            .then(found => {
                if (! found) {
                    throw new NotFoundError(`Recurso de ID: ${id} não encontrado`)
                } 
                
                data = {...data, ...this.defineTimestamps(data, Actions.UPDATE)}

                return this.model.findByIdAndUpdate(id, data, {
                    new: true,
                    runValidators: true
                })
            })
    }

    delete = id => {
        return this.model.deleteOne({_id: id}).exec()
    }

    private defineTimestamps(object: Object, action: Actions, ): Object {
        if (action === Actions.CREATE) {
            object['createdAt']  = new Date()
            object['updatedAt']  = null
        }

        if (action === Actions.UPDATE) {
            object['updatedAt']  = new Date()
        }
        return object
    }
}