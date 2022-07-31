const Emp = require('../models/emp');
const jwt = require('jsonwebtoken');


function logout(req, res, next) {
  res.clearCookie("user");
  res.json({ msg: "user logged out succesfully" })

}

module.exports.logout = logout;
