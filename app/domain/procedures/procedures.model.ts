import * as mongoose from 'mongoose'
import { Specialty } from '../specialties/specialty.model'
import { IModel } from '../../models/imodel'
import { BaseSchema } from '../../schemas/base-schema'

export interface Procedure extends IModel {
    name: string
    description: string
    specialty: Specialty
}

const procedureSchema = new BaseSchema({
    name: {	
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description: {	
        type: String,
        required: false,
        minlength: 3,
        maxlength: 255
    },
    specialty: {	
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialty',
        required: true
    },
}).build()

export const Procedure = mongoose.model<Procedure>('Procedure', procedureSchema)