var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World im here')
})

app.listen(app.get('port'), function() {
  console.log("Nodes app is running at localhost:" + app.get('port'))
})
