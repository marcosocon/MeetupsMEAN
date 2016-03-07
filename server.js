var express                  = require('express'),
    app                      = express(),
    bodyParser               = require('body-parser'),
    meetupsController        = require('./server/controllers/meetups-controller');

app.use(bodyParser());

app.get('/', function(req,res){
    res.sendfile('client/views/index.html');
});

app.use('/js', express.static( __dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function(){
  console.log("im listening..in port :3000");
})
