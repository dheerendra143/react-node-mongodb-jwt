const Emp = require('../models/emp');
// const mongoose = require('mongoose')

function create(req, res, next) {
  let empName = req.body.userName;
  let empEmail = req.body.userEmail;
  let empMobile = req.body.userContact;
  let empPassword = req.body.userPass;
 
  let emp = new Emp({
    empName,
    empEmail,
    empMobile,
    empPassword,
  })
  
  emp.save().then((data) => {
    res.status(200).send(data)
  }, (err)=>{
    res.status(200).json({status: 403, msg:err});
  })
};

function view(req, res, next) {
  console.log("coocie", req.session);
  Emp.find({}).then((data) => {
    res.send(data)
  }, (err)=>{
    res.status(200).json({status: 403, msg:err});
  })
};

function update(req, res, next) {
  Emp.findByIdAndUpdate(req.body.id, req.body, (err, emp) => {
    if (err) return res.status(500).send({ error: "Problem with Updating the Employee recored " })
    if (!emp) return res.status(400).send({ error: "Problem with Updating the Employee Not Found in recored " })

    res.send({ success: `${emp.empName} Updation successfully` });
  }, (err)=>{
    res.status(200).json({status: 403, msg:err});
  })
};

function remove(req, res, next) {
  Emp.findByIdAndDelete(req.body.id, (err, emp) => {

    if (err) return res.status(500).send({ error: "Problem with Deleting the   Employee recored " })
    if (!emp) return res.status(400).send({ error: "Problem with Deleting the   Employee Not Found in recored " })

    res.send({ success: `${emp.empName} Employee deleted successfully` })
  }, (err)=>{
    res.status(200).json({status: 403, msg:err});
  })
}



module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
module.exports.remove = remove;
// module.exports.login = login;

