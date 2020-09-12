'use strict';

// this will bring in my express libraray
const express = require('express');

// bring in the dotenv library
// the job of this library is to find the .env file and get the variables out of it so we can use them in our JS file
require('dotenv').config();

// this gives us a variable that we can use to run all the methods that are in the express library
const app = express();

// this lets us serve a website from a directory
app.use(express.static('./public'));

// the dotenv library lets us grab the PORT var from the .env using the magic words process.env.variableName
const PORT = process.env.PORT;
 
// app.get('/', function (request, response) {
//   response.send('Hello World');
// });

// app.get('/bananas', (request, response) => {
//   response.send('I am bananas about bananas');
// });
 
// turn on the server
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

// terminal commands:
// 1. set up your package.json: "nmp init"
      // make sure that entry point is server.js (instead o f index.js)
// 2. after acquiring library, to to terminal and run: npm install name-of-library

// turn on server use nodemon
// then go to browser and go to port:3000