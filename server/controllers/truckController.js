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
  }
};
