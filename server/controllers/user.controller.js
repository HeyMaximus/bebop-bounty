const userModel = require('../models/user.model');

module.exports.createUser = (req, res) => {
  userModel.createUser(req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(201).send(result.rows);
    }
  });
};
module.exports.getUser = (req, res) => {
  userModel.getUser(req.params.user_id, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(result.rows);
    }
  });
};
