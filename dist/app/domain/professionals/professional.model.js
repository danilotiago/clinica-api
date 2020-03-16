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
const professionalSchema = new base_schema_1.BaseSchema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialties: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Specialty'
        }]
}).build();
exports.Professional = mongoose.model('Professional', professionalSchema);
