"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
exports.addressSchema = new mongoose.Schema({
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
        ref: 'State',
        required: true
    }
});
