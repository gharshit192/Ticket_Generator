const { Long } = require('mongodb');
const mongoose = require('mongoose');


const TicketSchema = new Schema(
    {
        "uuid" : { type: String, default: null },
        "name" : { type: String, default: null,required: true },
        "type" : { type: String, default: null },
        "creationTime" : { type: Long, default: null },
        "assignee" : {type: String, default: null,required: true}, // Id Or name -> search via other service
        "viewers" : {type : Array, default : []}, // Array Of name/Id -> search via other service
        "orgId" : { type: String, default: null }, // id -> search via other service
        "bloodGroup" : {type: String, default: null,required: true},
        "nearestHospital" : {type: String, default: null,required: true}, // name -> search via other service
        "location" : { type: String, default: null,required: true }, // name -> search via other service
        "isResolve" : { type: Boolean, default: false},
        "resolveTime" : {type: Long, default: null}
    }
)



mongoose.model('Ticket', TicketSchema)