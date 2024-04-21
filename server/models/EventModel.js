import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var eventSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true,
    },
    eventIdea: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: new Date().toUTCString()
    },
    timeFrom: {
        type: String,
        required: true
    },
    timeTo: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    numOfParticipant:{
        type:Number,
        default:0
    },
    coodinatorName: {
        type: String,
        required: true
    },
    coodinatorContactNo: {
        type: String,
        required: true
    },
    paymentMethod:{
        type:String,
        enum:['credit','debit']
    },
    status:{
        type:String,
        default:'pending',
        enum:['pending','approved','rejected']
    }
});

const EventModel = mongoose.model('Events', eventSchema);
export default EventModel