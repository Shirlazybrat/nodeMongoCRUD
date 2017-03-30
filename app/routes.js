// this file is to keep all routing from the server.js file
//only for routing, not actual functionality of application
// this is to make the app more "modular"

// create a new express router
const express = require('express');
	router = express.Router();
	mainController = require('./controllers/main.controller')  //import the controller into the routes file

// export router so that is can be required over any server.js file
module.exports = router;

// define routes
router.get('/', 