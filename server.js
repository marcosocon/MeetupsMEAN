var express                  = require('express'),
    app                      = express(),
    mongoose                 = require('mongoose'),
    bodyParser               = require('body-parser'),
    meetupsController        = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/', function(req,res){
    res.sendfile('client/views/index.html');
});

app.use('/js', express.static( __dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.get('/api/meetups', meetupsController.list);


app.listen(3000, function(){
  console.log("im listening..in port :3000");
})
