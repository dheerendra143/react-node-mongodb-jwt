const express = require('express');
var router = express();
const bodyparser = require('body-parser');

const {create} = require('../controller/emp')
const {view} = require('../controller/emp')
const {update} = require('../controller/emp')
const {remove} = require('../controller/emp')
const {login} = require('../controller/login')
const {logout} = require('../controller/logout')
const { validateToken, checkUser } = require('../validate/user')

router.use(bodyparser.json())

router.post('/create', validateToken, create)
router.get('/getAll', validateToken, view)
router.patch('/update', validateToken, update)
router.delete('/delete/', validateToken, remove)
router.post('/login/', login)
router.post('/logout/', validateToken, logout)

module.exports = router