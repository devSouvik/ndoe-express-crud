const fs = require("fs");

// create a folder named souvik in the FS-CRUD folder

fs.mkdirSync("souvik");

// create a file named bio.txt and insert some data

fs.writeFileSync("souvik/bio.txt", "this is a new file.");

// append data to the file
fs.appendFileSync("souvik/bio.txt", "\n this is the appended data.");

fs.appendFileSync(
  "souvik/bio.txt",
  " this is the appended data in the same line."
);

// read data without initital buffer data
const readData = fs.readFileSync("souvik/bio.txt", "utf8");
console.log(readData);

// rename the file to mybio.txt
fs.renameSync("souvik/bio.txt", "souvik/mybio.txt");

// delete both the file and  the folder
fs.unlinkSync("souvik/mybio.txt");
fs.rmdirSync("souvik");
