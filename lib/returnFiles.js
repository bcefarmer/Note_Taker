// Filepaths
const path = require("path");   

//RETURN HTML FILES-----------------------------
module.exports = function (app) {

app.get("/notes", function(req,res){
    console.log()
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
}
// ------------------------------------------------



