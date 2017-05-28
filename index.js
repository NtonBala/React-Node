require('babel-register');
var express = require('express'),
    app = express(),
    result = require('./render.js').default;

app.get('/', function (req, res) {
    res.send(result);
});

app.listen(3005);
