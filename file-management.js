//const fs = require('fs');

// fs.writeFileSync('file.txt', 'Welcome to file Management course.');
// fs.appendFileSync('file.txt', ' This is the appended text');

// Export file
const notes = require('./notes');
// console.log(st);

// JSON file management
// const dataBuffer = fs.readFileSync('data.json');
// const dataJson = dataBuffer.toString();
// const dataParse = JSON.parse(dataJson);

// dataParse.description = 'Learning File management with Json in NodeJs';
// fs.writeFileSync('data.json', JSON.stringify(dataParse));

// Adding/Removing notes
notes.addNotes('Chandrika', 'Developer');
