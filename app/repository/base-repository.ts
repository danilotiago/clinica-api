import * as mongoose from 'mongoose'
import * as restify from 'restify'

export abstract class BaseRepository<D extends mongoose.Document> {

    model: mongoose.Model<D>

    constructor(model: mongoose.Model<D>) {
        this.model = model
    }

    findAll = () => {
        return this.model.find()
    }
}