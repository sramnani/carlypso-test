var express           = require('express'),
    app               = express(),
    listingUri        = "http://interview.carlypso.com/listings?offset=10&limit=20";
    listCountUri      = "http://interview.carlypso.com/count"
    listCount         = {};
    listingItems      = {};



app.use('/js', express.static(__dirname + '/client/js'));
app.use('/components', express.static(__dirname + '/client/components'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/views', express.static(__dirname + '/client/views'));



app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client/views/index.html');

});

app.listen(9000, function() {
    console.log('I\'m here...');
})
