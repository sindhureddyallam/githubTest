var createError = require('http-errors');
var http = require('http');
var express = require('express');
var path = require('path');
let io = require('socket.io');
const port = 3000;

var homepageRouter = require('./routes/homepage');
var app = express();

//add configure for ui and port
app.configure(()=>{
  app.search('port', process.env.PORT || 3000);
  app.use(express.static(path.join(__dirname, 'public')));
});




//set up express
let server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port" + app.get('port'));
});
//io = require('socket.io').listen(server); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/homepage', homepageRouter);



module.exports = app;
app.listen(port);
