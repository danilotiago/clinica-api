import * as mongoose from 'mongoose'
import { Status } from '../../enums/Status.enum'

export interface Schedule extends mongoose.Document {
    patient: string // trocar para mode de User
    professional: string // trocar para model de User
    service: string // trocar para model de Service
    procedures: [string] // trocar para model de Procedure
    comments: String
    requestDate: Date
    approvalDate: Date
    reschedulingDate: Date
    status: Status
}

export const scheduleSchema = new mongoose.Schema({
    // ===========================================================
    // alterar para Models
    // ===========================================================
    patient: {
        type: String, 
        required: true,
    },
    professional: {
        type: String, 
        required: true,
    },
    service: {
        type: String, 
        required: true,
    },
    procedures: {
        type: [String], 
        required: true,
    },
    // ===========================================================
    // alterar para Models
    // ===========================================================
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