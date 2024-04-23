import BookingModel from "../models/Booking.js";


export const createBooking = async(req,res)=>{
    try {
        const b  = await BookingModel.create(req?.body);
        res.status(200).json(b)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error?.message})
    }
}