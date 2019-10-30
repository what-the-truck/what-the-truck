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
  }
  //   addEvent: async (req,res) => {

  //       const {} = req.body
  //       const db = req.app.get('db')
  //       let event = await db.add_event([])
  //       res.status(200).send(event)
  //   }
};
