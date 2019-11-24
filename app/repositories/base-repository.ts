import * as mongoose from 'mongoose'

export abstract class BaseRepository<D extends mongoose.Document> {

    model: mongoose.Model<D>

    constructor(model: mongoose.Model<D>) {
        this.model = model
    }

    findAll = () => {
        return this.model.find()
    }

    save = data => {
        let object = new this.model(data)
        return object.save()
    }
}