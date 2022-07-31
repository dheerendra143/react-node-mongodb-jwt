const Emp = require('../models/emp');
const jwt = require('jsonwebtoken');


function logout(req, res, next) {
  res.clearCookie("user");
  console.log("User data block2",);
  res.json({ msg: "user deleted" })

}

module.exports.logout = logout;
