const { default: chalk } = require("chalk");
const fs = require("fs");

const getNotes = (title) => {
  const notes = loadNotes ();
  const note = notes.find((item)=> item.title === title);
  if (note) {
      console.log(chalk.blue.bold(note.title));
      console.log(note.body);
  } else (
      console.log(chalk.bgRed("Title not found!!!"))
  )
};



const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((item) => {
    return item.title === title;
  });
  const duplicateNote = notes.find((item) => item.title === title);
  debugger
  if (!duplicateNote) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("new added");
  } else {
      console.log("note taken");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
    const data = loadNotes();
    const filteredData = data.filter((item)=> item.title != title);
    saveNotes(filteredData);
    filteredData.length < data.length? 
        console.log(chalk.bgGreen(title + " removed")):
        console.log(chalk.bgRed(title + " not in the file"))
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow.underline("Your notes"));
    notes.forEach(element => {
        console.log(element.title);
    });
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes
};
