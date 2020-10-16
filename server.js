// dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");
var database = require("/db/db.json");
const { v4: uuidv4 } = require('uuid')
// set up express
var app = express();
var PORT = process.env.PORT || 3000;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// notes array
var notes = [];

// Routes/Redirects

// for the css & javascript
app.use(express.static('public'));

// notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// api/notes display all notes
app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });

//index.html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// api/clear clear notes!
app.put("/api/clear", function(req, res) {
    tables = [];
    waitlist = [];
    res.send("clear")
})

// post api/notes
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    if (note.length < i++) {
        note.push(newNote);
        res.send("Note")
    } else {
        waitlist.push(newNote);
        res.send();
    }
});

// api/delete/notes
app.delete("/api/delete/:notes", function(req, res) {
    var index = req.body.index;
    var temp = [];
    for (var i = 0; i < notes.length; i++) {
        if (i !== parseInt(index)) {
          temp.push(notes[i]);
        }
    }
    notes = temp;
    res.send("note removed")
})



// start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})
