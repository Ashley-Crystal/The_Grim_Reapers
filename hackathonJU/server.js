require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const events = require('./routes/events')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use(events)
app.use(userRoutes)

// connect to db
mongoose.connect('mongodb+srv://shrayanmandal21:1234@cluster1.oyprwas.mongodb.net/test')
  .then(() => {
    // listen for requests
    app.listen(4000, () => {
      console.log('connected to db & listening on port', 4000)
    })
  })
  .catch((error) => {
    console.log(error)
  })