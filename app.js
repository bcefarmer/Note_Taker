const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

const PORT = 8000;
const bodyParser = require("body-parser");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());

require("./public/returnFiles")(app);

// GET -----------------------

app.get("/api/notes", function(req,res){
  let noteData =  JSON.parse(fs.readFileSync(path.join(__dirname, "db", "db.json"), 'utf8'));
   res.json(noteData);

})    
// POST --------------------


app.post("/api/notes", function(req,res){
let dataStore = path.join(__dirname, "db", "db.json");



let noteContent = req.body;



dataStore.push(noteContent);


fs.writeFile(db_Path, JSON.stringify(dataStore),(err) => {
    if (err) {
      console.log(err); 
    } 
    else { 
      console.log("functioned");
    }
  });
});


// LISTENER

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})
    
    
   







