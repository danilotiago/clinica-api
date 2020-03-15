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
class BaseSchema {
    constructor(definitions, disableTimestamps = false) {
        this.definitions = definitions;
        if (!disableTimestamps) {
            this.setTimestamps();
        }
        this.build();
    }
    build() {
        return new mongoose.Schema(this.definitions);
    }
    setTimestamps() {
        this.definitions.createdAt = {
            type: Date,
            required: true
        };
        this.definitions.updatedAt = {
            type: Date,
            required: false
        };
    }
}
exports.BaseSchema = BaseSchema;
