let http = require('http')
http.createServer(function(req, res){
    res.end("welcome")
}).listen(1337);
console.log("listen at port 1337");