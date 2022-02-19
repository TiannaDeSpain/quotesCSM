// import library to access json file 
const fs = require('fs');

// GET '/quote/:name'
const getOnequote = (req, res, next) => {
    // define varriables for later use
    let quotes, quote;

    // open json file
    fs.readFile('./quotes.json', 'utf8', (err, data) => {

        // show error if applicable
        if (err){
            console.log(err)
        }

        // parse json file and send to user
        else{
            quotes = JSON.parse(data);
            for (let i =0; i<quotes.length;i++){
                if(quotes[i].id == req.params.name ){
                    quote = quotes[i].quote
                    res.json({message: `${quote}`});
                }

            }
        }
    })
};

// export controller functions
module.exports = {
    getOnequote,
};