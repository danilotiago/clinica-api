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
const specialtySchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 255
    },
    image: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
}).build();
exports.Specialty = mongoose.model('Specialty', specialtySchema);
