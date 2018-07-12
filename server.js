var http = require("http");
var url = require("url");
var formidable = require("formidable");

function start(route, handle) {
  function onRequest(request, response) {
    // var postData = "";

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response,request);
    
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;



// var http = require("http"); 
//  //第一行请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);
// //接下来我们调用http模块提供的函数： createServer 。
// // 这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，
// // 这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。

// 基于事件驱动的回调
// var http = require("http");

// function onRequest(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);

// var http = require("http");
// var url = require("url");

// function start(route,handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("请求的 " + pathname + " 已接收.");
    
    

//     // response.writeHead(200, {"Content-Type": "text/plain"});
//     // var content = route(handle,pathname);

//     // response.write(content);
//     // response.end();

//     route(handle, pathname, response);
//     // 最后，我们调用 response.end() 完成响应。
//   }
//   // 当收到请求时，使用 response.writeHead() 函数发送一个HTTP状态200
//   // 和HTTP头的内容类型（content-type），使用 response.write() 
//   // 函数在HTTP相应主体中发送文本“Hello World"。
//   http.createServer(onRequest).listen(8888);
//   console.log("服务器开始运行.");
// }
// exports.start = start; //导出这个函数