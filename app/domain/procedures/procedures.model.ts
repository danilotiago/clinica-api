import * as mongoose from 'mongoose'
import { Specialty } from '../specialties/specialty.model'

export interface Procedure extends mongoose.Document {
    name: string
    description: string
    specialty: Specialty
}

const procedureSchema = new mongoose.Schema({
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
})
export const Procedure = mongoose.model<Procedure>('Procedure', procedureSchema)