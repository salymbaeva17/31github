class Song {
    constructor(title,artist){
        this.title = title
        this.artist = artist
        this.l = new Set()
    }
    howMany(people) {
        let oldSize = this.l.size;
        people.map(p => this.l.add(p.toLowerCase()));
        return this.l.size - oldSize;
    }
}
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']))
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']))

