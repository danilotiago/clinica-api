import * as mongoose from 'mongoose'
import { Status } from '../../enums/Status.enum'
import { User } from '../users/user.model'
import { Professional } from '../professionals/professional.model'
import { Specialty } from '../specialties/specialty.model'
import { BaseSchema } from '../../schemas/base-schema'
import { IModel } from '../../models/imodel'

export interface Schedule extends IModel {
    patient: User
    professional: Professional
    specialty: Specialty
	procedures: String[]
    observations: String
    status: Status
    requestDate: Date
    requestHour: String
    approvalDate: Date
    createdAt: Date
    updatedAt: Date
}

export const scheduleSchema = new BaseSchema({
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
    specialty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialty',
        required: true
    },
    procedures: {
        type: [String], 
        required: true,
    },
    observations: {
        type: String,
        required: false,
        maxlength: 1000
    },
    requestDate: {
        type: Date, 
        required: true,
    },
    requestHour: {
        type: String, 
        required: true,
    },
    approvalDate: {
        type: Date, 
        required: false,
    },
    status: {
        type: String, 
        required: true,
    }
}).build()

export const Schedule = mongoose.model<Schedule>('Schedule', scheduleSchema)