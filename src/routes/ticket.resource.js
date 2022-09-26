
const express = require('express')
const app = express.Router()
var ticketService = require('../services/ticket.service.js')


app.get('/dummy', function(req, res){
    return res.status(200).send("hit")
});

app.post('/save-ticket', function(req, res){

    ticketService.saveTicket(req.body).then(_ => {
        res.send({"status": 200, "data": JSON.stringify(_), "error": null})

    })
    .catch(e => {
        res.send({"status": 400, "data": null, "error": e})
    })

    

});


module.exports = app