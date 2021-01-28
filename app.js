// EXPRESS
const express = require("express");
const app = express();
var PORT = process.env.PORT || 3001;


// Filepaths & writing to files
const path = require("path");
const fs = require("fs");


// Request parsing 
const bodyParser = require("body-parser");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());


// Point to jQuery HTML
app.use(express.static(path.join(__dirname, "public")));
require("./lib/returnFiles")(app);
require("./lib/returnApi")(app);


// LISTENER
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})
    
    
   







