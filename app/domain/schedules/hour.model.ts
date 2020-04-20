import * as mongoose from 'mongoose'
import { User } from '../users/user.model'
import { Professional } from '../professionals/professional.model'
import { BaseSchema } from '../../schemas/base-schema'
import { IModel } from '../../models/imodel'
import { Schedule } from './schedules.model'

export interface Hour extends IModel {
    schedule: Schedule
    patient: User
    professional: Professional
    date: Date
    hour: String
}

export const hourSchema = new BaseSchema({
    schedule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule',
        required: true
    },
    patient: {	
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    professional: {	
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional',
        required: true
    },
    date: {
        type: Date, 
        required: true,
    },
    hour: {
        type: String, 
        required: true,
    }
}).build()

export const Hour = mongoose.model<Hour>('Hour', hourSchema)