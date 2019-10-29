module.exports = {
    getAllTrucks: (req, res) => {
        const db = req.app.get('db')
        db.get_all_trucks()
        .then(trucks=>
            res.status(200).send(trucks))
    }
}
