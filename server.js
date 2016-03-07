var express = require('express'),
    app = express();

app.get('/', function(req,res){
    res.sendfile('client/views/index.html');
});

app.use('/js', express.static( __dirname + '/client/js'));

app.listen(3000, function(){
  console.log("im listening..in port :3000");
})
