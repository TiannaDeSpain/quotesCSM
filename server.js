// node libary imports, assigned to variable for access
const express = require ('express');
const routes = require('./routes/quote'); // import the routes

// setup express which takes network requests and reroutes/ fulfills them 
const app = express();

// allows express to send and recieve JSON files
app.use(express.json());

// allows express to use the routes
app.use('/', routes); 

// this starts express listening for requests on port 3000 
const listener = app.listen(process.env.PORT || 3000, () => {
    // user friendly message that the server is listening
    console.log('Your app is listening on port ' + listener.address().port)
})