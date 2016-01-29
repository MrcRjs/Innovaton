
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
 var morgan = require('morgan'); 

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', './views');
  app.set('view engine', 'jade');
  app.set('view options',{layout: false});
  app.use(morgan('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname+ '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/teleferico' ,function (request,response){
    response.render('teleferico')
})
app.get('/parquePaseo' ,function (request,response){
    response.render('parque')
})
app.get('/streaming' ,function (request,response){
    response.render('streaming')
})


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
