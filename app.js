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
    handler: function(argv) {
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
    handler: function(argv) {
        console.log("    Removing Note")
        noteUtils.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all note',
    handler: function() {
        console.log("    Listing Note 1")
        console.log("    Listing Note 2")
        console.log("    Listing Note 3")
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log("    This is a Note")
    }
})

yargs.parse()