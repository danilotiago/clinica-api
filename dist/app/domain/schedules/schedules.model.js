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
});
exports.Schedule = mongoose.model('Schedule', exports.scheduleSchema);
