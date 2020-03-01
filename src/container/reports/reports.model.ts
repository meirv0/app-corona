import mongoose, { Schema, } from 'mongoose';

export interface IReports {
    location: {
        type: string,
        coordinates: [number, number]
    },
    startDate: Date,
    endDate: Date,
    description: string
}

const reportsSchema = new Schema({
    location: new Schema({
        type: String,
        coordinates: [Number, Number]
    }, { _id: false }),
    startDate: Date,
    endDate: Date,
    description: String
});

export default mongoose.model('Reports', reportsSchema);