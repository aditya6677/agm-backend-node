const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const compressor = require('compression');
const https = require("https");
const fs = require("fs");
const app = express();
const db = require('./app/db/index');
const port = process.env.PORT || 2428;

const auth = require('./app/auth/auth');
const route = require('./app/route');
const userAuth = require('./app/auth/userAuth');
const cors = require('cors')


//Parser
app.use(helmet());
app.use(cors())
app.use(compressor());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//Auth Middleware
app.use('/api', auth);
app.use('/auth', userAuth);
app.use('/api/pucc', route);

const server = https.createServer(
    {
      key: fs.readFileSync("./key.pem"),
      cert: fs.readFileSync("./cert.pem"),
    },
    app
)

server.listen(port,()=>{
  console.log(`Running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Server is listening on port ${port}`);
});
