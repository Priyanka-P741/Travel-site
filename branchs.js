'use strict'
var express = require('express');
var router = express.Router();  
var {branch} = require('../models');
var {employee} = require('../models');


router.post('/', (req, res) => {
   // const id = req.params.id;
    //const branch_name = req.body.branch_name;
    //const Order_quantity = req.body.Order ;
   
   branch.findAll({ 
    include: [{
    model:employee ,
where:{}
}]
  }).then(branch => {
     res.json(branch)
 });
 });


module.exports = router;
