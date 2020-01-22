import * as mongoose from 'mongoose'

export interface Address extends mongoose.Document {
    cep: string
    street: string
    number: number
    complement: string
    neighborhood: string
    city: string
    state: string
}

export const addressSchema = new mongoose.Schema({
    cep: {	
        type: String,
        required: true,
        minlength: 8,
        maxlength: 8
    },
    street: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    number: { 
        type: Number
    },
    complement: {	
        type: String,
        maxlength: 255
    },
    neighborhood: {	
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    city: {	
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    state: {	
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        minlength: 2,
        maxlength: 100
    }
})
