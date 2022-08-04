const jwt = require('jsonwebtoken');
const Emp = require('../models/emp');
const SESSION_TIME = 2;//Minutes

function validateToken(req, res, next) {
    const bearer = req.cookies['user'];
    console.log("cookie", bearer);
    console.log("session", req.session.userId);
    const SECRET_KEY = req.session.userId;

    if (bearer) {
        const bearerToken = bearer.split(" ");
        const token = bearerToken[1];
        jwt.verify(token, SECRET_KEY, (err, data) => {
            if (err) {
                res.status(403).send("User Unauthorized");
            } else {
                req.userData = data;
                next();
            }
        })
    } else {
        req.session.destroy();
        res.status(403).send("User Unauthorized");
    }
}

function checkUser(req, res, next) {
    const bearer = req.cookies['user'];

    if (bearer) {
        res.status(403).send("User already  authorized");
    } else {
        req.session.destroy();
        console.log("validate create", req.body)
        next();
    }
}

function getActiveUserInfo(req, res, next) {
    const bearer = req.cookies['user'];
    const SECRET_KEY = req.session.userId;
    console.log(bearer, "SECRET_KEY", SECRET_KEY);
    if (SECRET_KEY && bearer) {
        Emp.find({ id: SECRET_KEY }).then((data) => {
            if (data.length) {
                const response = { session: SESSION_TIME, name: data[0].empName, email: data[0].empEmail, contact: data[0].empMobile };
                res.status(200).json({ status: 200, ...response });
            } else {
                res.status(200).json({ status: 403, msg: "Invalid credential" });
            }
        })
    } else {
        req.session.destroy();
        res.status(200).json({ status: 403, msg: "Invalid credential" });
    }
}

function resetToken(req, res, next) {
    

}

module.exports.validateToken = validateToken;
module.exports.checkUser = checkUser;
module.exports.getActiveUserInfo = getActiveUserInfo;
