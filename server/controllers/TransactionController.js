import TransactionModel from "../models/TransactionModel"


export const createTransaction = async ({userId,eventId,amount}) => {
    try {
        const createTransaction = await TransactionModel.create({userId,eventId,amount})
        return true
    } catch (error) {
        return false
    }
}
