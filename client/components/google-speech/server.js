var express           = require('express'),
    app               = express();

app.use('/index.html', express.static(__dirname + '/index.html'));
app.use('/', express.static(__dirname + '/'));


app.listen(9000, function() {
    console.log('I\'m here...');
})

