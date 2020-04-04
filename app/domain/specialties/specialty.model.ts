import * as mongoose from 'mongoose'
import { IModel } from '../../models/imodel'
import { BaseSchema } from '../../schemas/base-schema'

export interface Specialty extends IModel {
    name: string
    description: string
    image: string
}

const specialtySchema = new BaseSchema({
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
    },
    procedures: {
        type: [String]
    }
}).build()

export const Specialty = mongoose.model<Specialty>('Specialty', specialtySchema)