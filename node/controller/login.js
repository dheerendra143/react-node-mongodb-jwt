const Emp = require('../models/emp');
const jwt = require('jsonwebtoken');
const SESSION_TIME = 2 ;//Minutes

function login(req, res, next) {
  const userMail = req.body.username;
  const password = req.body.password;

  Emp.find({ empEmail: userMail, empPassword: password }).then((data) => {
    if(data.length) {
      const response = {session: SESSION_TIME, name:data[0].empName, email:data[0].empEmail, contact: data[0].empMobile};
      const SECRET_KEY = data[0].id;

      req.session.userId = SECRET_KEY;

      jwt.sign({ response }, SECRET_KEY, (err, token) => {
        if (err) {
          console.log("error", err)
          res.status(200).json({status: 403,msg:"Invalid credential"});
        } else {
          const completeToken = `bearer ${token}`;          
          res.cookie(`user`, completeToken, {
            maxAge: 1000 * 60 * SESSION_TIME, // would expire after 1 minutes
            // expires works the same as the maxAge
            // expires: new Date('07 12 2024'),
            secure: true,
            httpOnly: true,
            sameSite: 'lax'
          });
          res.status(200).json({status:200, response: {...response}, msg:"successfully logged in" });
        }

      });
    } else {
      res.status(200).json({status: 403,msg:"Invalid credential"});
    }
  })
}

module.exports.login = login;
