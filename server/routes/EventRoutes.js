import express from 'express'
import { createEvent, deleteEvent, getAllEvents, getOneEvent, updateEvent, updateStatus } from '../controllers/EventController.js'

const eventRouter = express.Router()

eventRouter.get('/',getAllEvents);
eventRouter.get('/:id',getOneEvent);
eventRouter.put('/:id',updateEvent);
eventRouter.put('/status/:id',updateStatus);
eventRouter.post('/',createEvent);
eventRouter.delete('/:id',deleteEvent);

export default eventRouter;