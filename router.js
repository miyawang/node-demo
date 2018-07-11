function route(handle, pathname, response,request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;


// function route(handle,pathname,response) {
//   console.log("路由请求 " + pathname);
//   if (typeof handle[pathname] === 'function') {
//     return handle[pathname]();
//   } else {
//     console.log("没有找到这个请求 " + pathname);
//     response.writeHead(404, {"Content-Type": "text/plain"});
//     response.write("404 Not found");
//     response.end();
//   }
// }

// exports.route = route;