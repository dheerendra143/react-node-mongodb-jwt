const Emp = require('../models/emp');
const jwt = require('jsonwebtoken');


function logout(req, res, next) {
  
  res.clearCookie("user");
  req.session.destroy();
  res.status(200).json({ msg: `user logged out succesfully ${ req.session}` })

}

module.exports.logout = logout;
