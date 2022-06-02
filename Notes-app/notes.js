const chalk = require("chalk");
const fs = require("fs");
const yargs = require("yargs");
// create a getNotes function that return "get your notes . . ."
const getNotes = () => {
        return "get your notes . . .";
};

const addNote = (title, body) => {
        const notes = loadNotes();
        const duplicateNotes = notes.filter((note) => {
                return note.title === title;
        });

        if (duplicateNotes.length === 0) {
                notes.push({
                        title: title,
                        body: body,
                });
                saveNotes(notes);
                console.log("new notes added");
        } else {
                console.log("Note title already taken");
        }
};

const removeNote = (title) => {
        const notes = loadNotes();
        const notesToKeep = notes.filter((note) => {
                return note.title !== title;
        });

        if (notes.length > notesToKeep.length) {
                console.log(
                        chalk.green.inverse("note removed with title: ", title)
                );
        } else {
                console.log(chalk.red.inverse("No such note found"));
        }

        saveNotes(notesToKeep);
};

const saveNotes = (notes) => {
        const dataJson = JSON.stringify(notes);
        fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
        try {
                const data = fs.readFileSync("notes.json", "utf-8");
                return JSON.parse(data);
        } catch (e) {
                return [];
        }
};

module.exports = {
        getNotes: getNotes,
        addNote: addNote,
        removeNote: removeNote,
};
