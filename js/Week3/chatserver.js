var chatServer = require('net').Socket();
chatServer.connect(8080, 'localhost');
chatServer.write('GET http://www.google.com/ HTTP/1.1\n\n');

chatServer.on('data', function (d) {
    console.log(d.toString());
});

chatServer.end();