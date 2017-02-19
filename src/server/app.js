'use strict';

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');


// Configure the server
const port = process.env.port || 3000;

// Create a new express server
const app = express();

// voeg middle ware toe
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // added for passport/login

// static files
app.use('/login', express.static('src/client'));

// Pass app to the session (because it needs the added middleware)
require('./session').session(app);

// Send a response to the index
app.get('/', moneysend.Funding.create);

// Start server on the specified port and binding host
app.listen(port, () => {
  console.log(`Node Version: ${process.version}`);
  console.log(`Server starting on http://localhost:${port}`);
});