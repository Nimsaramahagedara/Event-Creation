import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default:0
    },
    eventId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Events'
    }
}, { timestamps: true });

const TransactionModel = mongoose.model('Transactions', transactionSchema);
export default TransactionModel