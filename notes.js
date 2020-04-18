const fs = require('fs')
const chalk = require('chalk')

// Generic Save Util
const save = (fileName, data, message) => fs.writeFile(fileName, data, (err) => {
    if (err)
        console.log(err)
    else
        console.log(message)
})

// Write Note to notes.json
const saveNote = (title, body) => {
    const notes = loadNotes()
    const dup = notes.find((note) => note.title === title)
    if (!dup) {
        notes.push({
            title: title,
            body: body
        })
        save("notes.json", JSON.stringify(notes), chalk.green("Note saved"))
    } else
        console.log(chalk.red("Note already exists "))
}

// Remove a note from notes.json
const removeNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.findIndex(note => note.title === title)
    if (selectedNote >= 0) {
        notes.splice(selectedNote, 1)
        save("notes.json", JSON.stringify(notes), chalk.red("Note removed"))
    } else {
        console.log(chalk.red("Note could not be found"))
    }
}

// Read Notes from notes.json
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (err) {
        return []
    }
}


const list = () => {
    const notes = loadNotes()
    debugger
    return notes.map(note=>note.title)
}

const read = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.findIndex(note => note.title === title)
    if (selectedNote >= 0) {
        return notes[selectedNote].body
    } else {
        console.log(chalk.red("Note could not be found"))
    }
}

module.exports = {
    getNote: read,
    addNote: saveNote,
    removeNote: removeNote,
    listNotes: list,
    readNote: read
}