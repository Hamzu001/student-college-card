const mongoose = require('mongoose');

const mongoURI = process.env.DB

const mdb  = mongoose.connect(mongoURI);

if(mdb) console.log("connect to mongo db");
else console.log("not connect to mongo db");