module.exports = {
    getFollow: (req, res) => {
        // console.log('get follow')
        const db = req.app.get("db")
        const {userId, truckId} = req.query
        // console.log('testing ' + userId,'and'+ truckId)
        db.get_follow([userId,truckId]).then(info =>
            res.status(200).send(info))
        
    },
    addFollow: (req, res) => {
        const db = req.app.get("db")
        const truckid = req.params.id
        const {userid} = req.body
        // console.log('adding')
        db.add_follow([userid, truckid]).then(info=> {
            res.status(200).send('You are now following this truck')
        })
    },
    deleteFollow: (req, res) => {
        const db = req.app.get("db")
        const id = req.params.id
        // console.log('deleting')
        db.delete_follow([id]).then(info => {
            res.status(200).send('aint following no more')
        })
    }
}
