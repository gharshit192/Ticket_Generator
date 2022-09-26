var express = require('express')
var app = express()

var cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json({ limit: "10mb", extended: true })
var urlParser = bodyParser.urlencoded({ limit: '10mb', extended: true, type: 'application/json' })
app.use(jsonParser)
app.use(urlParser)

app.use(cors())

const {init} = require('./framework/initDatabase')
 

var http = require('http').Server(app);
var port = 8776

http.listen(port, () => {
    init();
    console.log('listening on *:' + port);
});

// var contextMiddleWare = require("./framework/middleware/contextMiddleware.js")
var ticketResource = require('./routes/ticket.resource.js')


// app.use(contextMiddleWare.clsMiddleware)

app.use("", ticketResource)


module.exports = {
    app
}