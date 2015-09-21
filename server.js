var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser')
    request           = require("request");
    listingUri        = "http://interview.carlypso.com/listings?offset=10&limit=20";
    listCountUri      = "http://interview.carlypso.com/count"
    listCount         = {};
    listingItems      = {};
app.use(bodyParser());



app.use('/js', express.static(__dirname + '/client/js'));
app.use('/components', express.static(__dirname + '/client/components'));
app.use('/css', express.static(__dirname + '/client/css'));


request(listingUri, function (error, response) {
        if (!error && response.statusCode == 200) {
             listingItems = response.body;
        }
    });

request(listCountUri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        listCount = body;
    }
});
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client/views/index.html');

});
app.get('/cars',function(req,res){


});
app.listen(9000, function() {
    console.log('I\'m here...');
})
