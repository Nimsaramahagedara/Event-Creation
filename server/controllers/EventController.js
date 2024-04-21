import EventModel from "../models/EventModel.js";

export const getAllEvents = async(req,res)=>{
    try {
        const allEvents = await EventModel.find();
        res.status(200).json(allEvents)
    } catch (error) {
        console.log(error);
        res.status(200).json({message:error.message})
    }
}

export const getOneEvent = async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await EventModel.findById(id)
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(200).json({message:error.message})
    }
}

export const createEvent = async(req,res)=>{
    try {
        const data = req.body;
        const createdEvent = await EventModel.create(data);

        res.status(200).json(createdEvent)
    } catch (error) {
        console.log(error);
        res.status(200).json({message:error.message})
    }
}

export const updateEvent = async(req,res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        const updatedEvent = await EventModel.findByIdAndUpdate(id,data)

        res.status(200).json(updatedEvent)
    } catch (error) {
        console.log(error);
        res.status(200).json({message:error.message})
    }
}

export const deleteEvent = async(req,res)=>{
    try {
        const {id} = req.params; 
        const updatedEvent = await EventModel.findByIdAndDelete(id)

        res.status(200).json(updatedEvent)
    } catch (error) {
        console.log(error);
        res.status(200).json({message:error.message})
    }
}

export const updateStatus = async(req,res)=>{
    try {
        const {id} = req.params;
        const {status} = req.body;
        if(status!== 'pending'|| status!=='approved' || status!=='rejected'){
            throw Error('Event status can be either pending, approved or rejected only')
        }
        const updatedEvent = await EventModel.findByIdAndUpdate(id,{status:status})

        res.status(200).json(updatedEvent)
    } catch (error) {
        console.log(error);
        res.status(200).json({message:error.message})
    }
}