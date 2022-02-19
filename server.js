
// node libary imports, assigned to variable for access
const express = require ('express');
const routes = require('./routes/quote'); // import the routes

// setup express which takes network requests and reroutes/ fulfills them 
const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes


// this starts express listening for requests on port 3000 
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
