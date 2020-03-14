import * as mongoose from 'mongoose'
import { Specialty } from '../specialties/specialty.model'
import { User } from '../users/user.model'

export interface Professional extends mongoose.Document {
    user: User
    specialties: Specialty[]
}

const professionalSchema = new mongoose.Schema({
    user: {	
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialty'
    }]
})
export const Professional = mongoose.model<Professional>('Professional', professionalSchema)
