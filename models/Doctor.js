'use strict';
const mongoose  = require('mongoose');
let bcrypt      = require('bcrypt');

let doctor = new mongoose.Schema({
  title: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  patients: [ {type : mongoose.Schema.ObjectId, ref : 'User'} ]
});

module.exports = mongoose.model('Doctor', doctor);
