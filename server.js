// install express server
const express = require('express');
const app = express();

//serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));

//start the app by listening on the default heroku port
app.listener(process.env.PORT || 8080);