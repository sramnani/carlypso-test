/*!
 * apiai
 * Copyright(c) 2015 http://api.ai/
 * Apache 2.0 Licensed
 */

var http = require('http');
var apiai = require("./node_modules/apiai");

var app = apiai("70c80ff43b2c4a77a8c45c8f46a1b2e5", "d138c8e1-d54d-43ad-8d44-e5181343394e ");

var server = http.createServer(function(request, response) {
    if (request.method = 'GET') {
        var url = require('url');
        var url_parts = url.parse(request.url, true);
        var query = url_parts.query;
        console.log(query);
        var text = query["text"];
        console.log("GOt text from client " + text);
        var voiceRequest = app.textRequest(text);

        voiceRequest.on('response', function(_response) {
            response.end(JSON.stringify(_response));
            // var json = JSON.stringify({'resolvedQuery': _response['result']['resolvedQuery']})
            // response.end(json);
        });

        voiceRequest.on('error', function(error) {
            console.log(error);
            response.end();
        });

        request.on('data', function(chunk) {
            voiceRequest.write(chunk);
        });

        request.on('end', function() {
            voiceRequest.end();
        });
    } else {
        response.writeHead(code, {});
        response.end();
    }

});

console.log("Listening on port 9080...");
server.listen(9080);

// cat ann_smith.wav | curl -v -X POST --data-binary @- -H "Transfer-Encoding: chunked" -H "Content-Type: audio/wav" http://localhost:8000/upload
