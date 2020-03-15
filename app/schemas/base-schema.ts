import * as mongoose from 'mongoose'

export class BaseSchema {
    
    private schema: mongoose.Schema

    constructor(private definitions: mongoose.SchemaDefinition, 
        disableTimestamps: boolean = false) {
        if (! disableTimestamps) {
            this.setTimestamps()
        }   
        this.build()
    }

    public build() {
        return new mongoose.Schema(this.definitions)
    }

    private setTimestamps(): void {
        (<any>this.definitions).createdAt = {	
            type: Date,
            required: true
        };

        (<any>this.definitions).updatedAt = {	
            type: Date,
            required: false
        };
    }
}