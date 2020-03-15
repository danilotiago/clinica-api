import * as mongoose from 'mongoose'

export interface IModel extends mongoose.Document {
    createdAt: Date
    updatedAt: Date | null
}