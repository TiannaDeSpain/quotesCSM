
// node libary imports, assigned to variable for access
const express = require('express');

// this a route for clients to send requests to the server
const router  = express.Router();
const quoteController = require('../controllers/quote');

// this is the end point users can access the server through
router.get('/quote/:name', quoteController.getOnequote);

module.exports = router;
