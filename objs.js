class Dj {
    constructor(name) {
        this.name = name;
    }
}

class Song {
    constructor(name) {
        this.name = name;
    }
 }

class Timeslot {
    constructor(dj, song) {
        this.dj = dj;
        this.song = song;
    }
}
module.exports = {
    Dj,
    Song,
    Timeslot
};