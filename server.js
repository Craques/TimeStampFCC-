'use strict';
var path = require("path");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require("./app/routes/index.js");
var controller = require("./app/controllers/timestamp.js");
var handlebars = require("express-handlebars");
app.use('/public', express.static(process.cwd() + "/public"));

//view engine settings
app.set("views", __dirname + "/app/views");
app.engine("handlebars", handlebars({defaultLayout: "main", layoutsDir: __dirname + "/app/views/layouts"}))
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//run the app through the api
//routes(app);
controller(app);

app.listen(8080, function () {
    console.log('Listening on port 4000...');
});
