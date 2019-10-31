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
      const db =req.app.get('db')
      const attend = await db.get_all_attend()
      res.status(200).send(attend)
  },

  addAttend: async (req,res) => {
    const db = req.app.get('db')
    const {event_id, truckId} = req.body
    await db.add_attend([event_id, truckId])
    res.status(200)
  },
  deleteAttend: async (req,res) =>{
      const { id } = req.params
      const db = req.app.get("db")
      let remove = await db.delete_attend(id)
      res.status(200).send(remove)
  }
};
