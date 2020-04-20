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
const base_schema_1 = require("../../schemas/base-schema");
exports.hourSchema = new base_schema_1.BaseSchema({
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
}).build();
exports.Hour = mongoose.model('Hour', exports.hourSchema);
