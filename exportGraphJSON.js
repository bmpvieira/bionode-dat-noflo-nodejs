var levelgraph = require('levelgraph')
var db = levelgraph('ncbi')
var crypto = require('crypto')


var stream = db.getStream({})
stream.on("data", function(data) {
  var _id = crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex')
  data._id = _id
  console.log(JSON.stringify(data))
})
