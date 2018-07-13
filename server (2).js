var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号\nnode server.js 80')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

 
  console.log('HTTP 路径为\n' + path)
  if(path == '/'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>'  + 
    '<head><link rel="stylesheet" href="/style.css">' +
    '</head><body>'  +
    '<script src="/main.js"></script>' +
    '</body></html>')
    response.end()
  }else if(path == '/style.css'){
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write()
    response.end()
  }else if(path == '/main.js'){
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write()
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }

})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port)