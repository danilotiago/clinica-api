import * as mongoose from 'mongoose'

export interface State extends mongoose.Document {
    name: string
    abbreviation: string
}

export const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    abbreviation: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    }
})

export const State = mongoose.model<State>('State', stateSchema)