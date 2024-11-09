var Dj = require('./objs.js').Dj;
var Song = require('./objs.js').Song;
var Timeslot = require('./objs.js').Timeslot;
var express = require('express');
var path = require('path')
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

let slot1 = new Timeslot(new Dj("dj1"), new Song("song1"));
let slot2 = new Timeslot(new Dj("dj2"), new Song("song2"));
let slot3 = new Timeslot(new Dj("dj3"), new Song("song3"));

console.log("tests:");
for (let i = 0; i < 5; i++) {
  if (1 < 2 && i == 2) {
    console.log("loop and if = true");
  }
}

slot3.song = "New Song";
slot3.adding = "new attribute";
console.log(slot3.song);
console.log(slot3.adding);

app.get('/report', function (req, res) {
  res.render('pages/report', {
    slot1: slot1,
    slot2: slot2,
    slot3: slot3,
  });
});

app.get('/assign', function (req, res) {
  res.render('pages/assign', {
    slot1: slot1,
    slot2: slot2,
    slot3: slot3,
  });
});

app.listen(8080);
console.log('Server is listening on port 8080');
