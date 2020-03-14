import * as mongoose from 'mongoose'
import { Status } from '../../enums/Status.enum'
import { User } from '../users/user.model'
import { Professional } from '../professionals/professional.model'
import { Specialty } from '../specialties/specialty.model'
import { Procedure } from '../procedures/procedures.model'

export interface Schedule extends mongoose.Document {
    patient: User
    professional: Professional
    specialty: Specialty
    procedures: Procedure[]
    comments: String
    requestDate: Date
    approvalDate: Date
    reschedulingDate: Date
    status: Status
}

export const scheduleSchema = new mongoose.Schema({
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
})

export const Schedule = mongoose.model<Schedule>('Schedule', scheduleSchema)