

const mongoose = require('mongoose');
const Ticket =  mongoose.model('Ticket') 


async function saveTicket(ticket){
    const ticket = new Ticket(ticket);

    ticket.save((err) =>{
        if(err) {
            console.log(err)
        }else{
            console.log("Succesfully Craeted Ticket")
        }
    })
}