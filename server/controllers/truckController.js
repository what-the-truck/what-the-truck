module.exports = {
  getAllTrucks: (req, res) => {
    const db = req.app.get("db");
    db.get_all_trucks().then(trucks => res.status(200).send(trucks));
  },
  deleteTruck: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const remove = await db.delete_truck(id);
    res.status(200).send(remove);
  },
  getATruck: async (req, res) => {
    const { truck_id } = req.params;
    console.log(req.params)
    const db = req.app.get("db");
    const truck = await db.get_a_truck(truck_id);
    res.status(200).send(truck);
  }
};
