import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId
    },
    amount: {
        type: String,
        required: true,
    },
    eventId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Events'
    }
}, { timestamps: true });

const TransactionModel = mongoose.model('Transactions', transactionSchema);
export default TransactionModel