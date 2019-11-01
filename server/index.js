require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const {SERVER_PORT, CONNECTION_STRING, SECRET, KEY} = process.env
const app = express()
const session = require ('express-session')
const eventCtrl = require('./controllers/eventController')
const truckCtrl = require('./controllers/truckController')
const userCtrl = require('./controllers/userController')
const authCtrl = require('./controllers/authController')
// const twilio = require('twilio')

// const accountSid = _twilio_account_sid
//set accountSid in env
// const authToken = _twilio_auth_token
//set authToken in env
// const client = new twilio(accountSid,authToken)
// const cors = require('cors')


// app.use(cors())
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUnitialized: true, 
    })
)
massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
},
console.log('db is working'))
.catch(err=>console.log(err))

app.use(express.json())

app.get('/api/trucks', truckCtrl.getAllTrucks)
app.get('/api/events', eventCtrl.getAllEvents)
app.get('/api/attends', eventCtrl.getAllAttend)
app.get('/auth/check', authCtrl.checkUser)
app.get('/api/key', authCtrl.getKey)
app.get('/api/truck/:truck_id',truckCtrl.getATruck)
// app.get('/api/truck',truckCtrl.getTruckDash)

app.post('/auth/truck', authCtrl.registerTruck)
app.post('/auth/user', authCtrl.registerUser)
app.post('/auth/trucklogin', authCtrl.loginTruck)
app.post('/auth/userlogin', authCtrl.loginUser)
app.post('/api/event', eventCtrl.addEvent)
app.post('/api/attend', eventCtrl.addAttend)


app.delete('/api/truck/:id', truckCtrl.deleteTruck)
app.delete('/api/event/:id', eventCtrl.deleteEvent)
app.delete('/api/attend/:id', eventCtrl.deleteAttend)
app.delete('/auth/logout', authCtrl.logout)

// app.put('/api/event', eventCtrl.editEvent)
// app.put('/api/user', userCtrl.editUser)

//sending twilio alert
// app.get('/send-text',(req,res) => {
//     console.log(req.query)
//     const {recipient,textmessage} = req.query
//     client.messages.create({
//         body:textmessage,
//         to:"1" + recipient,
//         from:"+" //add twilio number
//     })
// .then((message) => console.log(message.body))})

app.listen(SERVER_PORT, ()=> console.log(`I made ${SERVER_PORT} Dr Peppers just for you!`))