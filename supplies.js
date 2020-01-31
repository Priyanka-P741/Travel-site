'use strict'
var express = require('express');
//var app = express();
//var fs = require('fs');
var router = express.Router(); 
var {supply} = require('../models');
var {employee} = require('../models');
var {branch} = require('../models');
var {branchsupplier} = require('../models');
var {group} = require('../models');
var {user} = require('../models');
var multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {req.file
      cb(null, file.originalname)
    }
  });
  
  const fileFilter = (req, file,cb)=>{
    //reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif' || file.mimetype === 'text/json')
  { cb(null,true);
  }

  else {
    cb(null,false);
  }
};
  const upload = multer({storage: storage,  limits:{
    fileSize: 1024*1024*1024
  },
   fileFilter: fileFilter

});

var path = require('path');



router.post('/',upload.single('productImage'), (req, res) => {
   console.log(req.file);
    const id = req.params.id;
    const branch_id = req.body.branch_id;
    const branchsupplier_id = req.body.branchsupplier_id;
    const productImage = req.file.path;
     
   supply.create({branch_id:branch_id,branchsupplier_id:branchsupplier_id,productImage:productImage}).then(supply=>{
       res.json(supply)
   })
   
   .catch(err=>{
       res.json(err)
   })
  });
   
   router.put('/:id/productImage',upload.single('productImage'),(req, res) => {
    console.log(req.file);
    const id = req.params.id;
    //  const branch_id = req.body.branch_id;
    //  const branchsupplier_id = req.body.branchsupplier_id;
     const productImage = req.file.path;
    
     supply.findOne({productImage:productImage},
       {where:{id:id}
     })
    
    supply.update({
      productImage:productImage
    }, {where:{id:id}}).then(supply=>{
        res.json(supply)
    })
    .catch(err => {
      res.json(err)
    })
    });
   
   
   router.post('/',(req, res) =>{
    const branch_id = req.body.branch_id;
    const branchsupplier_id = req.body.branchsupplier_id;
    const productImage = req.file.path;
     
   supply.findAll({ 
    include: [{
    model:branch ,
    as:'group',
    include: {
        model:employee,
        as:'user'
    }
    
},
{
    model:branchsupplier ,
    

 }]
  }).then(supply => {
    res.send('ROOT LOCATION');
 });
  });

  var fs = require('fs');
  var data = fs.readFileSync('data.json');
  var words = JSON.parse(data);
  var UPDATE = words.updates;
  const arraydata=[]
  
  router.post('/create',(req, res) =>{
    const branch_id = req.body.branch_id;
    const branchsupplier_id = req.body.branchsupplier_id;
    
    UPDATE.forEach(element => {
      //  console.log(element);
       var jsonData = {
        delta_t:element.delta_t,
         field1:element.field1,
         field2:element.field2
      }
      supply.create(jsonData,branch_id,branchsupplier_id)
      .then(supply=>{
      res.json(supply)
    })
    .catch(err=>{
        res.json(err)
    })
      
    });

  
 });

 














 
module.exports = router;