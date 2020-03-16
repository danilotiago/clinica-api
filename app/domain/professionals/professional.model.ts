import * as mongoose from 'mongoose'
import { Specialty } from '../specialties/specialty.model'
import { User } from '../users/user.model'
import { IModel } from '../../models/imodel'
import { BaseSchema } from '../../schemas/base-schema'

export interface Professional extends IModel {
    user: User
    specialties: Specialty[]
}

const professionalSchema = new BaseSchema({
    user: {	
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialty'
    }]
}).build()

export const Professional = mongoose.model<Professional>('Professional', professionalSchema)
