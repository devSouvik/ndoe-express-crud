// const sumOf2nums = require("./utils.js");

// const fs = require("fs");

// const addition = sumOf2nums(4, 5);

// console.log(addition);
// const product = require("./second.js");

// const newProduct = product(4, 5);

// console.log(newProduct);

// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
const fs = require("fs");
const { removeNote } = require("./notes.js");

// const msg = getNotes();
// console.log(msg);

// const emailid = "souvikguria98@gmail";

// if (validator.isEmail(emailid)) {
//   console.log("valid email id");
// } else {
//   console.log("invalid email id");
// }

// console.log(chalk.red.inverse("Error!"));
// console.log(process.argv[2]);

// const command = process.argv[2];
// const title = process.argv[3];
// const body = process.argv[4];

// const note = {
//   title: title,
//   body: body,
// };

// const page = [];

// if (command === "add") {
//   console.log("note added successfully");
//   page.push(note);
// } else if (command === "remove") {
//   console.log("note removed successfully");
// } else {
//   console.log("app ran, but proper command not found");
// }

// console.log(note);
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Title is : ", argv.title);
    // console.log("Body is : ", argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// create a remove comamnd
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {},
  },
  handler: function (argv) {
    console.log("removing a note");
    removeNote(argv.title);
  },
});

// create a list command
yargs.command({
  command: "list",
  describe: "listing all notes",
  handler: function () {
    console.log("listing all notes");
  },
});

// create a command for read
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading a note");
  },
});

// const title = yargs.argv["title"];
// const title = yargs.argv["body"];

yargs.argv;

// console.log(title);
// console.log(body);
