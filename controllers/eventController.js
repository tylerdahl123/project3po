const db = require("../models")

module.exports = {
    findAll: function(req, res) {
      db.Event.find({ userName: req.params.userName})
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log(req.body);
        db.Event.create(req.body)
          .then(dbEvent => res.json(dbEvent))
          .catch(err => res.status(422).json(err));
      },

      remove: function(req, res) {
        db.Event.findById(req.params.id)
          .then(dbEvent => dbEvent.remove())
          .then(dbEvent => res.json(dbEvent))
          .catch(err => res.status(422).json(err));
      }

}