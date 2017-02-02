const path = require('path')
const express = require('express')
var app = express();
var PORT = process.env.PORT || 9999
var config = require('./config');
var mongoose = require('mongoose');
var Motif = require('./models/Motifs');
var mongoskin = require('mongoskin')

/*
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
*/
var db = mongoskin.db('mongodb://@localhost:27017/nodetest2', {safe:true})

if (process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/app/*', function(request, response) {
    response.sendFile(__dirname + '/public/app.html')
});

app.get('/', function(req, res, next) {
  res.send('please select a collection, e.g., /collections/messages')
});


app.param('collectionName', function(req, res, next, collectionName){
    req.collection = db.collection(collectionName)
    return next()
})

app.get('/collections/:collectionName', function(req, res, next) {
  req.collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){
    if (e) return next(e)
    res.send(results)
  })
});

app.get('/register', function(request, response) {
    response.sendFile(__dirname + '/public/register.html')
});

app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
});
