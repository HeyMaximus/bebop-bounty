const userModel = require('../models/user.model');

module.exports.createUser = (req, res) => {
  console.log('createUser body: ', req.body);
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
  console.log('getUser params: ', req.params);
  userModel.getUser(req.params.user_id, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(result.rows);
    }
  });
};
