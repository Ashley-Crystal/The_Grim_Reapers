const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  eventName:{
    type: String,
    required: true
  },
  eventDetails:{
    type: String,
    required: true
  },
  urgent: {
    type: Boolean,
    default: false,
  }  
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)