const bountyModel = require('../models/bounty.model');

module.exports.getBounties = (req, res) => {};
module.exports.createBounty = async (req, res) => {
  const bounty = req.body;
  try {
    await bountyModel.createBounty(bounty);
    res.status(201).send('Bounty created');
  } catch (err) {
    console.error(err.message);
    res.sendStatus(400);
  }
};
