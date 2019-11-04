const bcrypt = require('bcryptjs')

module.exports = {
    getKey(req,res) {
        const db = req.app.get('db')
        db.get_key().then(key => res.status(200).send(key))
    },
    async registerTruck(req, res) {
        const db = req.app.get('db')
        const { name, phone, img, food_type, description, password, email } = req.body

        // Check to see if the user has already registered
        const truck = await db.find_email(email)
        // // // if they have, stop the function
        if (truck[0])
            return res.status(200).send({ message: 'Email already in use' })
        // Salt and hash the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // Store the new user in the DB
        const newTruck = await db.add_truck({ name, phone, img, food_type, description, hash, email}).catch(err => {
            return res.sendStatus(503)
        })
        // Store the new user in sessions
        req.session.truck = {
        truckId: newTruck[0].truck_id,
         email,
         name,
         phone,
         loggedIn: true   
        }
        // Send the session.user object to the front end
        res
            .status(201)
            .send({ message: 'You are now registered', truck: req.session.truck })
    },
    async registerUser(req, res) {
        const db = req.app.get('db')
        const {password, email, phone } = req.body

        // Check to see if the user has already registered
        const user = await db.find_user_email(email)
        // // // if they have, stop the function
        if (user[0])
            return res.status(200).send({ message: 'Email already in use' })
        // Salt and hash the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // Store the new user in the DB
        const newUser = await db.add_user({hash, email, phone}).catch(err => {
            return res.sendStatus(503)
        })
        // Store the new user in sessions
        req.session.user = {
        userId: newUser[0].user_id,
         email,
         loggedIn: true   
        }
        // Send the session.user object to the front end
        res
            .status(201)
            .send({ message: 'Logged in', user: req.session.user })
    },
    async loginTruck(req, res) {
        const db = req.app.get('db')
        const { email, password } = req.body
        console.log(email, password)
        // check if user exists (and the hash)
        const user = await db.find_truck(email)
        // if user doesn't exist, send appropriate response
        if (!user[0]) return res.status(200).send({ message: 'Email not found' })
        // hash password and compare
        const result = bcrypt.compareSync(password, user[0].hash)
        // if hashes don't match, send appropriate response
        if (!result) return res.status(200).send({ message: 'Incorrect password' })
        // if they do match, add user to sessions
        const {name, truck_id} = user[0]
        req.session.truck = { truckId: truck_id, email, name }
        // send session.user back to front end
        res
            .status(200)
            .send({ message: 'Logged in', truck: req.session.truck, loggedIn: true })
    },
    async loginUser (req, res) {
        const db = req.app.get('db')
        const { email, password } = req.body
        console.log(email, password)
        // check if user exists (and the hash)
        const user = await db.find_user(email)
        // if user doesn't exist, send appropriate response
        if (!user[0]) return res.status(200).send({ message: 'Email not found' })
        // hash password and compare
        const result = bcrypt.compareSync(password, user[0].hash)
        // if hashes don't match, send appropriate response
        if (!result) return res.status(200).send({ message: 'Incorrect password' })
        // if they do match, add user to sessions
        const {user_id} = user[0]
        req.session.user = { userId: user_id, email}
        // send session.user back to front end
        res
            .status(200)
            .send({ message: 'Logged in', user: req.session.user, loggedIn: true })
    },
    logout(req, res) {
        console.log('logout hit')
        req.session.destroy()
        res.status(200).send({ message: 'Logged out', loggedIn: false })
    },
    getUser: async (req, res) => {
        console.log(req.session.user)
        res.status(200).send(req.session.user)
    },
    checkUser: async (req, res) => {
        console.log('hit')
        if(req.session.user) {
            res.status(200).send(req.session.user)
        }
        if(req.session.truck) {
            res.status(200).send(req.session.truck)
        } else {
            res.status(200).send('none')
        }
    }
}