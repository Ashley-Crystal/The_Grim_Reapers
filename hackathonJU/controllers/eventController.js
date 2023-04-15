const Event = require('../models/eventModel')
const mongoose = require('mongoose')

const createEvent = async (req, res) => {
  const { eventName, eventDetails, urgent } = req.body;

  let message = "";

  try {
    let event = new Event(req.body);
    const newEvent = await event.save();  

    message = "Event Successfully enlisted!";

    res.status(200).json({eventName, message});
  } catch (error) {
    res.status(400).json({eventName, error:error.message});
  }
  
}

const getEvents = async (req, res) => {
  const { eventName } = req.body;
  let eventList = [];
  let message = "";

  try {
    eventList = await Event.find();

    console.log(eventList);

    message = "Events Found"

    res.status(200).json({ eventList, message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createEvent,
  getEvents
}