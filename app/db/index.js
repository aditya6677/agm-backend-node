const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://Aditya76:Aditya123@cluster0.oj2yl.mongodb.net/vehicles?retryWrites=true&w=majority";
const autoIncrement = require('mongoose-auto-increment');
//Create connection
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, poolSize : 25 });
mongoose.set('bufferCommands', false);

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('connected', console.error.bind(console, 'MongoDB connected'));