http = require('http');
stringify = require('querystring').stringify;

//initialization of the variable names
var elastic_host;
var elastic_port;

function configService(host,port)
{
  elastic_host = host;
  elastic_port = port;
}

function indexDocument(document,index,type)
{
    //var data = stringify(document);
    var data = document;

    var options = {
    host: elastic_host,
    port: elastic_port,
    path: index+'/'+type,
    method: 'POST'
    };

    var request = http.request(options, function(res) {
                   console.log('STATUS: ' + res.statusCode);
                   console.log('HEADERS: ' + JSON.stringify(res.headers));
                   res.setEncoding('utf8');
                   res.on('data', function (response) {
                          console.log('response: ' + response);
                      });

                   });

    console.log('data=('+data+')');
    request.write(data);
    request.end();
}

exports.configService = configService;
exports.indexDocument = indexDocument;
