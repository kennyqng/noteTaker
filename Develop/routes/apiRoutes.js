var db = require("../db/db");
var fs = require("fs");


module.exports = function(app){

    app.get("/api/notes", function(req, res){
        res.json(db);
    });

    app.post("/api/notes", function(req, res){
        db.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(db), function(err){
            if (err) {
                throw err;
            }
            res.json(true);
        });
    });
    app.delete('/api/notes/:id', (req,res)=>{
        db.splice(req.params.id,1)
        fs.writeFile("./db/db.json", JSON.stringify(db), function(err){
            if (err) {
                throw err;
            }
            res.json(true);
        });
    })
};