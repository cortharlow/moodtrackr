'use strict';
const mongoose  = require('mongoose');

let mood = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  scale: {type: Number, required: true},
  date: Date,
  time: String,
  context: String,
  created_at: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('Mood', mood);
