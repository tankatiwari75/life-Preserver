// require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString ="mongodb://127.0.0.1:27017/LifePreserver";
const userRouter = require('./routes/userRoute');
const contactRoute = require('./routes/contactRoute')
const taskRoute = require('./routes/taskRoute')
const messageRoute = require('./routes/messageRoute')




mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());


app.use('/api', userRouter)
app.use('/api', contactRoute)
app.use('/api',taskRoute)
app.use('/api',messageRoute)





app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})