const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 8000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// GET -----------------------

app.get("/api/notes", function(req,res){
  let noteData =  JSON.parse(fs.readFileSync(path.join(__dirname, "db", "db.json"), 'utf8'));
   res.json(noteData);

})    

app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "public", "notes.html"));
})


app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"public", "index.html"));
})

// POST --------------------

app.post("/api/notes", function(req,res){
let dataStore = path.join(__dirname,"db", "db.json")
let noteContent = req.body;
fs.dataStore.append(res)


    
})





// LISTENER

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})
    
    
   







