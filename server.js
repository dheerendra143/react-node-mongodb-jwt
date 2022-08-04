const express = require('express');
const mongoose = require('mongoose');
var app = express();
const router = require('./node/routes/route');
const path = require('path');
const PORT = 8000;
const portalPath = "portal/build";
const helmet = require("helmet");
const cookieparser = require("cookie-parser");
const bodyparser = require('body-parser');
const sessions = require('express-session');

//session
app.use(sessions({
  secret: 'initialized',
  
  // Forces the session to be saved
  // back to the session store
  resave: true,

  // Forces a session that is "uninitialized"
  // to be saved to the store
  saveUninitialized: true
}));

// allow user to send request parameter
//app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// allow the app to use cookieparser
app.use(helmet());

// allow the app to use cookieparser
app.use(cookieparser());


//Route
app.use('/emp',router)  

app.use(express.static(path.join(__dirname, portalPath)));

//if user enter manual URL
app.get('/*', function (req, res) {
  res.redirect("/");
});

app.get('/', function (req, res) {
  // app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, portalPath, 'index.html'));
});

//MongoDB connection
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})
//Server
app.listen(PORT,function(){
  console.log('Server is Up on ', PORT);
})