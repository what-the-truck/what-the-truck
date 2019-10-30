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
};
