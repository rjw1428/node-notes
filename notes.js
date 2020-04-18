const fs = require('fs')
const chalk = require('chalk')

// Generic Save Util
const save = (fileName, data, message) => fs.writeFile(fileName, data, (err) => {
    if (err)
        console.log(err)
    else
        console.log(message)
})

// Generic Read Util
const read = (fileName) => {
    readBuffer = fs.readFileSync(fileName)
    return readBuffer.toString()
}

// Write Note to notes.json
const saveNote = (title, body) => {
    const notes = loadNotes()
    const dups = notes.filter((note) => note.title === title)
    if (!dups.length) {
        notes.push({
            title: title,
            body: body
        })
        save("notes.json", JSON.stringify(notes), chalk.green("Note saved"))
    } else
        console.log(chalk.red("Note already exists "))
}

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
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (err) {
        return []
    }
}

module.exports = {
    getNote: read,
    addNote: saveNote,
    removeNote: removeNote
}