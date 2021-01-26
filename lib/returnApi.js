const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const dataStore = require("./db/db.json");

// EXPORT API'S ----------------------------------
module.exports = function(app) {
app.get("/api/notes", function(req,res){
  let noteData =  JSON.parse(fs.readFileSync(path.join(__dirname, "db", "db.json"), 'utf8'));
   return res.json(noteData);
})    


app.post("/api/notes", function(req,res){
    let noteContent = req.body;
    dataStore.push(noteContent);
    fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(dataStore),(err) => {
        if (err) {
          console.log(err); 
        } 
        else { 
          console.log("functioned");
        }
      });
     
      res.json(noteContent);
    });
}
// ----------------------------------------------