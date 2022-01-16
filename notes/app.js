// import * as fs from "fs"
// const add = require('./utils.js')
// console.log(add(1,2));
// const validator = require("validator");
// const fs = require("fs");
// fs.writeFileSync("newFile.txt","With import", (err)=> {if (err) throw arr})
// const foo = require("./notes.js");
// console.log(foo());

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// const command = process.argv[2];

// if(command === "add") {
//     console.log("Adding note");
// } else {
//     console.log("Remove");
// }

// console.log(process.argv);

// this is how to add new command to the app.js file
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      //means it is required, cant run without
      type: "string"
      //we dont have to add type, just if we want
    }
  },
  body: {
    describe: "Note body",
    demandOption: true,
    type: "string"
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title to delete",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv){
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "print the list",
  handler(){
    notes.listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "read the list",
  demandOption: "true",
  type: "string",
  handler (argv){
    notes.getNotes(argv.title)
  }
});

// we need to do one of them:
// console.log(yargs.argv);
yargs.parse();
