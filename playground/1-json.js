const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// const parsedata = JSON.parse(bookJSON);
// console.log(parsedata.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const data = fs.readFileSync("1-json.json", "utf8");
// const parsedata = JSON.parse(data);
// console.log(parsedata.author);

const data = fs.readFileSync("1-json.json");
const parsedata = JSON.parse(data);
console.log(parsedata);

parsedata.name = "Souvik";
parsedata.age = 24;

console.log(parsedata);
fs.writeFileSync("1-json.json", JSON.stringify(parsedata));
