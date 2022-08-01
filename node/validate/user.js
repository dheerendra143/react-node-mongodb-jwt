const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
    const bearer = req.cookies['user'];
    const SECRET_KEY = "62e0288a2f30fcf80aeaf41c";
    console.log("cookie", bearer);
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
        res.status(403).send("User Unauthorized");
    }
}

function checkUser(req, res, next) {
    const bearer = req.cookies['user'];

    if (bearer) {
        res.status(403).send("User already  authorized");
    } else {
        console.log("validate create", req.body)
        next();
    }
}

module.exports.validateToken = validateToken;
module.exports.checkUser = checkUser;
