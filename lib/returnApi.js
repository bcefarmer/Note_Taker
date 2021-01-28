const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const dataStore = require("./db/db.json");
var uuid = require("uuid");




// EXPORT THESE API'S ----------------------------------
// Return existing notes as JSON
module.exports = function(app) {
app.get("/api/notes", function(req,res){
  let noteData =  JSON.parse(fs.readFileSync(path.join(__dirname, "db", "db.json"), 'utf8'));
   return res.json(noteData);
})    

// Post a new note
app.post("/api/notes", function(req,res){
    let noteContent = req.body;
    noteContent.uuid = uuid.v4();
    dataStore.push(noteContent);
    fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(dataStore),(err) => {
        if (err) {
          console.log(err);
          
        } 
        else { 
          
          console.log("Success");
          
        }
      });
     
      res.json(noteContent);
    });


  // Delete my notes
    app.delete('/api/notes/:id', (req, res) => {
      let current_uuid = req.params.id;
      
      
       
        for(let i = 0; i < dataStore.length; i++){
         if(dataStore[i].uuid === current_uuid){
           
           dataStore.splice(i, 1);
          break;
         }
        }
        fs.writeFile("./lib/db/db.json", JSON.stringify(dataStore), (err) => {
          if (err) {
            //res.sendStatus(404);
            console.log(err);
            
          } else {
            
            console.log("Your note has been deleted");
            
          }
        });
        // res.redirect('back');
    });
  }


// ----------------------------------------------