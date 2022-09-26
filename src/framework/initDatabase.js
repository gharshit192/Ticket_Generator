const MongoClient = require('mongodb').MongoClient
const connectionUrl = "mongodb://localhost:27017"
const dbName = 'test'

let db
let collection 
const init = () =>{
    MongoClient.connect(connectionUrl).then(_ => {
        db = _.db(dbName)
        collection = db.collection('ticket')

        console.log(`DB NAME - ${dbName} , Collection Name - ${collection.collectionName}`)
    })
}

module.exports = {
    init,
    db,
    collection
}
