const fs = require("fs");
var inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");
const path = require("path");
function init(){
inquirer.prompt([
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
    type: "Checkbox",
    name:"license",
    message:"Please select the licence for your Readme/Project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD3", "none"],
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
]).then((data) =>{
const fileName = `${data.title}.md`;

fs.writeFile(fileName, generateMarkdown(data)),(err)=>{
  if (err) {
    return console.log(err);}
    console.log("file created")
}})};
// TODO: Create a function to write README file
// function writeFile(fileName, generateMarkdown(data)) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }
// // TODO: Create a function to initialize app
// function init() {

//   inquirer.prompt(questions).then((responses) =>{
//     console.log("Creating your README.md File");
//     writeFile(".././Assets/readme.md", generateMarkdown({...responses}));
//   });
// }

// Function call to initialize app
init();
