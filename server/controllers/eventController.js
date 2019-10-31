module.exports = {
  getAllEvents: (req, res) => {
    const db = req.app.get("db");
    db.get_all_events().then(events => res.status(200).send(events));
  },
  deleteEvent: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    let remove = await db.delete_event(id);
    res.status(200).send(remove);
  },
  addEvent: async (req, res) => {
    const db = req.app.get("db");
    const { name, address, latitude, longitude, date, time } = req.body;
    const event = await db.add_event([
      name,
      address,
      latitude,
      longitude,
      date,
      time
    ]);
    res.status(200).send(event);
  },
  getAllAttend: async (req,res)=> {
    console.log('hit attend')
      const db =req.app.get('db')
      const attend = await db.get_all_attend()
      res.status(200).send(attend)
  },
  deleteAttend: async (req,res) =>{
      const { id } = req.params
      const db = req.app.get("db")
      let remove = await db.delete_attend(id)
      res.status(200).send(remove)
  }
};
