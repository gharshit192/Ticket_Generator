
const ticletRepo = require('../repository/ticket.repository.js')

async function saveTicket(ticket){
    if(!ticket.name) return 
    await ticletRepo.saveTicket(ticket)
}


module.exports = {
    saveTicket : saveTicket
}