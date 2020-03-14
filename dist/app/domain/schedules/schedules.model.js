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
exports.scheduleSchema = new mongoose.Schema({
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
});
exports.Schedule = mongoose.model('Schedule', exports.scheduleSchema);
