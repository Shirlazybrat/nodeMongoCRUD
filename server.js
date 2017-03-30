// this file is for configurationa and loading the server

// grab our dependencies
const express = require('express');
	app = express(),  //start a new instance of express called app
	port = process.env.PORT || 7070;  //grab the port that the server is supposed to listen to 

// configure our application

// set the routes
app.use(require('./app/routes')); //bring in all the routes from the routes.js file

//Test that the server is running
// app.get('/', (req, res) => {
// 	res.send('Hello, I am the app!');
// });

// start our server
app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});

