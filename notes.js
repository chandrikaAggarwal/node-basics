
const fs = require('fs');
const commonUt = require('./common');

const fileName = 'notes.json';

const addNotes = (name, role) => {
  console.log(commonUt.inProgressMessage('Adding record'));

  try {
    noteList = loadNotes();

    noteList.push({
      name: name,
      role: role,
    });

    saveNotes(noteList);
    console.log(commonUt.successMessage('New record added'));
  } catch (e) {
    console.log(commonUt.errorMessage(e));
  }
};

const saveNotes = noteList => {
  fs.writeFileSync(fileName, JSON.stringify(noteList));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(fileName);
    return commonUt.bufferParse(dataBuffer);
  } catch (e) {
    console.log(commonUt.errorMessage(e));
    return [];
  }
};

const readNote = name => {
  const noteList = loadNotes();
  const note = noteList.find(note => note.name === name);
  return (note)
    ? note
    : commonUt.errorMessage(`No data found for name ${name}`);
};

const removeNote = name => {
  console.log(commonUt.inProgressMessage('Removing record'));
  noteList = loadNotes();

  if (name) {
    const newList = noteList.filter(note => note.name !== name);
    if (newList.length < noteList.length) {
      saveNotes(newList);
      console.log(commonUt.successMessage('Record is removed'));
    } else {
      console.log(commonUt.errorMessage(`No record found for name ${name}`));
    }
  } else {
    console.log(commonUt.errorMessage('Please provide valid name for removal'));
  }
};

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  loadNotes: loadNotes,
  readNote: readNote,
};
