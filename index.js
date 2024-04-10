const fs = require("fs");
var inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown")
const path = require("path")
const questions = [
  {
    type: "input",
    name:"title",
    message:"Name your Readme/Project",
  },
  {
    type: "input",
    name:"description",
    message:"Please Describe your Readme/Project",
  },
  {
    type: "list",
    name:"license",
    message:"Please select the licence for your Readme/Project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL v3.0", "BSD3", "none"],
  },
  {
    type: "input",
    name:"require",
    message:"Please List any dependencies for your Readme/Project",
  },
  {
    type: "input",
    name:"usage",
    message:"What languages or Technologies are used your Readme/Project?",
  },
  {
    type: "input",
    name:"name",
    message:"What is your Name?",
  },
  {
    type: "input",
    name:"email",
    message:"What is your Email?",
  },
  {
    type: "input",
    name:"github",
    message:"What is your github username?",
  },
  {
    type: "input",
    name:"contributors",
    message:"Who else helped you with this project (please use github usernames)?",
  },
  {
    type: "input",
    name:"test",
    message:"What testing was done?",
  },
];

// TODO: Create a function to write README file

const writeToFile= fileContent =>{

  fs.writeFileSync('./createdREADME.md',fileContent);

}
  

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions)
      .then(function(answer){
    console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent);
  });
}

// Function call to initialize app
init();

module.exports = questions;