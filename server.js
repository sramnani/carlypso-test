var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser')
    request           = require("request");

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/components', express.static(__dirname + '/client/components'));


app.listen(9000, function() {
    console.log('I\'m here...');
})
