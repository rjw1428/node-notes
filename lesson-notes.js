const fs = require('fs');
let fileName = "message.txt"
let data = "This is a new text file!\n"
let data2 = "Adding another line."

// PART 1--------------------------
/// SAVING A FILE
// //Happens Async
// fs.writeFile(fileName, data, (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log("file saved")
// })

// //File write starts, this runs, then the callback to file write occurs
// console.log("First Thing")


// fs.appendFile(fileName, data2, (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log("Data Added to File")
// })


// PART 2 ------------------------------------
// IMPORTING A FILE
// const addFunction = require('./util')
// const getNotes = require('./notes')
// console.log(addFunction(1,2))

// console.log(getNotes("message.txt"))

//PART 3 ------------------------------
// run npm init and answer question to create package.json
// run npm i validator

// const validator = require('validator')
// console.log(validator.isEmail('rjw1428@gmail.com'))

//PART 4 -------------------------------
// adding chalk to add styling to console output
// run npm i chalk
const chalk = require('chalk')
console.log(chalk.underline.bold.blue("Hello") + ' World' + chalk.red('!!!'))


//PART 5 ----------------------------
//global vs local dependancies
// run npm i -g nodemon
// nodemon run
// console.log("HERE2")



//PART 6 --------------------------
//GET ARGUMENTS -> returns array of args
//arg 0) path to node
//arg 1) path to program file
//arg n) any other input arguments  
console.log(process.argv)
