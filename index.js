const fs = require("fs")
var inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown")
inquirer
  .prompt([
   {
    type: 'input',
    name: 'input_type',
    message: 'What is your name?',
    default: 'Ellie'
   },
   {
    type: 'list',
    name: 'list question',
    message: 'What language do you like?', 
    choices:['Javascript','CSS','Html','SQL'],
    default:'Javascipt'
   },
   {
    type: 'checkbox',
    name: 'checkbox question',
    message: 'What languages do you like?', 
    choices:['Javascript','CSS','Html','SQL'],
    default:'Javascript'
   },
  ])
  .then((answers) => {
    console.log(answers)
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
