'use strict';
// Declare constants
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const request     = require('request');
const bodyParser  = require('body-parser');
const jwt         = require('jsonwebtoken');
const app         = express();

// Create server
let server = require('http').createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Create database
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moodtrackr')

// Active server
server.listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
