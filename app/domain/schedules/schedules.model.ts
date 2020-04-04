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
    comments: String
    requestDate: Date
    approvalDate: Date
    reschedulingDate: Date
    status: Status
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
    procedures: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Procedure'
    }],
    comments: {
        type: String,
        required: true,
        maxlength: 1000
    },
    requestDate: {
        type: Date, 
        required: true,
    },
    approvalDate: {
        type: Date, 
        required: true,
    },
    reschedulingDate: {
        type: Date, 
        required: true,
    },
    status: {
        type: String, 
        required: true,
    }
}).build()

export const Schedule = mongoose.model<Schedule>('Schedule', scheduleSchema)