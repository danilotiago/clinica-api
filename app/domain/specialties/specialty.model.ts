import * as mongoose from 'mongoose'

export interface Specialty extends mongoose.Document {
    name: string
    description: string
    image: string
}

const specialtySchema = new mongoose.Schema({
    name: {	
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description: {	
        type: String
    },
    image: {	
        type: String
    }
})
export const Specialty = mongoose.model<Specialty>('Specialty', specialtySchema)