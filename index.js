// var waitpid = require('waitpid')
// var spawn = require('child_process').spawn
// var init = spawn('sed', ['-ie', 's/{{PORT}}/'+process.env.PORT+'/', 'flowhub.json'])
// setTimeout('regex done', 2000)
// // var status = waitpid(init.pid)
// // 
// // function wait() {
// //   if (status.exitCode !== 0) { setTimeout(wait, 1000) }
// //   else {
// //     var main = spawn('node', ['node_modules/.bin/noflo-nodejs'])
// //     main.stdout.pipe(process.stdout)
// //   }
// // }
// // 
// // wait()
// // 
// // var http = require('http')
// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/plain'})
// //   res.end('Hello World\n');
// // }).listen(process.env.PORT)
var fs = require('fs')
var flowhub = {
  "id": "a3dd14ac-cdc2-4ed5-99d2-41933a35f611",
  "user": "75da53fb-3297-4852-85ad-8525231f8a36",
  "host": "bionode-dat-noflo-nodejs.herokuapp.com",
  "port": process.env.PORT,
  "label": "bionode-dat-noflo-nodejs"
}
fs.writeFile('flowhub.json', JSON.stringify(flowhub), function() {
  console.log('wrote flowhub.json')
})
