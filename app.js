// app-level 3rd party module requirements
'use strict';

const express = require('express');
const path = require('path')
const cors = require('cors');
const app = express();
const mysql = require('mysql');
var Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const models = require('./models/');
var router = express.Router();

var multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})



// Create a public folder
app.use('/uploads',express.static('uploads'));

//app.locals.Data = require('./data.json');

// var fs = require('fs');
// var data = fs.readFileSync('data.json');
// var words = JSON.parse(data);
// console.log(words.updates);
// for(var i=0; i<2;i++){
// var delta_T = words.updates[i].delta_t
// console.log({delta_T});
//}
// var UPDATE = words.updates;
// UPDATE.forEach(element => {
//   console.log(element);
// });



// function jsonParser(stringValue) {

//   var string = JSON.stringify(stringValue);
//   var objectValue = JSON.parse(string);
//   return objectValue['delta_t'];
//   console.log(objectValue);
// }


// app-level custom module requirements

 const branch = require('./routes/branchs');
 const supply = require('./routes/supplies');


// port used for the  backend app
const port = process.env.APP_PORT || 5060;


// body-parser setup
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app-level routes for use as middleware
app.use('/api/branch', branch);
 app.use('/api/supply', supply);



var sequelize = new Sequelize('database_branch', 'root', 'null', {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 5060,
        operatorsAliases: false
      },
    });
models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });


app.listen(port, () => console.log(`Express server running on port ${port}`));

module.exports = app;
