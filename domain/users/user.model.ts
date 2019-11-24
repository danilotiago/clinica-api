import { hashPassword } from './hash-password';
import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
    name: string
    email: string
    password: string
}

const userSchema = new mongoose.Schema({
    name: {	
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    },
    password: { 
        type: String,
        select: false,
        required: true
    }
})

/**
 * middlewares pre => mongoose
 * 
 */
userSchema.pre('save', function(next) {
    hashPassword(this, next)
})

export const User = mongoose.model<User>('User', userSchema)
