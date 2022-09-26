const mongoose = require('mongoose')

const configs = require('../framework/config.js')



const db = {};
db.mongoose = mongoose;
db.url = configs;
