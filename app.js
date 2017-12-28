/* Automaticly start gulp tasks */
console.log("Initialize gulp from app.js");
const { spawn } = require('child_process')
const tasks = ['default']
const child = spawn('gulp', tasks)
child.stdout.on('data', function(data) {
    if (data) console.log(data.toString().trim())
})

/** Defining Express server */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

module.exports = app;
