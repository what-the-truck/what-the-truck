require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const app = express()
const session = require ('express-session')
const eventCtrl = require('./controllers/eventController')
const truckCtrl = require('./controllers/truckController')
const userCtrl = require('./controllers/userController')
const authCtrl = require('./controllers/authController')

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
// app.get('/api/attend', eventCtrl.getAllAttend)
app.get('/auth/check', authCtrl.checkUser)

app.post('/auth/truck', authCtrl.registerTruck)
app.post('/auth/user', authCtrl.registerUser)
app.post('/auth/trucklogin', authCtrl.loginTruck)
app.post('/auth/userlogin', authCtrl.loginUser)
// app.post('/api/event', eventCtrl.addEvent)


app.delete('/api/truck/:id', truckCtrl.deleteTruck)
app.delete('/api/event/:id', eventCtrl.deleteEvent)
// app.delete('/api/attend/:id', deleteAttend)
app.delete('/auth/logout', authCtrl.logout)

// app.put('/api/event', eventCtrl.editEvent)
// app.put('/api/user', userCtrl.editUser)

app.listen(SERVER_PORT, ()=> console.log(`I made ${SERVER_PORT} Dr Peppers just for you!`))