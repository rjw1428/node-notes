const chalk = require('chalk')
const yargs = require('yargs')
const noteUtils = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log("    Adding Note: ",argv.title)
        noteUtils.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log("    Removing Note")
        noteUtils.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all note',
    handler: () => {
        console.log(noteUtils.listNotes())
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(noteUtils.readNote(argv.title))
    }
})

yargs.parse()