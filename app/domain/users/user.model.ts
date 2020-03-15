import { addressSchema, Address } from './address.model';
import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'
import { hashPassword } from './hash-password'
import { IModel } from '../../models/imodel';
import { BaseSchema } from '../../schemas/base-schema';

export interface User extends IModel {
    name: string
    email: string
    birthDate: Date
    address: Address
    profiles: [String]
    password: string
    passwordIsValid(password: string): boolean
}

const userSchema = new BaseSchema({
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
    birthDate: {	
        type: Date,
        required: true
    },
    password: { 
        type: String,
        select: false,
        required: true
    },
    profiles: {
        type: [String],
        required: false
    },
    address: {	
        type: addressSchema,
        required: true
    },
}).build()

/**
 * middlewares pre => mongoose
 * 
 */
userSchema.pre('save', function(next) {
    if (! this.isModified('password')) {
        return next()
    }
    hashPassword(this, next)
})

userSchema.pre('findOneAndUpdate', function(next) {
    if (! this.getUpdate().password) {
        return next()
    }
    hashPassword(this.getUpdate(), next)
})

userSchema.methods.passwordIsValid = function(password: string): boolean {
    return bcrypt.compareSync(password, this.password)
}

export const User = mongoose.model<User>('User', userSchema)
