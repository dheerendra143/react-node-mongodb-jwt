const Emp = require('../models/emp');
const jwt = require('jsonwebtoken');

function login(req, res, next) {
    Emp.find({ empName: 'dheeru' }).then((data) => {
        const response = data[0];
        const SECRET_KEY = response.id;
      
      jwt.sign({response}, SECRET_KEY, (err, token)=>{
        if(err) {
            res.sendStatus(403);
        } else {
          const completeToken = `bearer ${token}`;
          res.cookie(`user`, completeToken, {
            maxAge: 1000 * 60 * 1, // would expire after 1 minutes
            // expires works the same as the maxAge
            // expires: new Date('07 12 2024'),
            secure: true,
            httpOnly: true,
            sameSite: 'lax'
          });
            res.json({token});
        }

      })
      
    })
  }

  module.exports.login = login;
