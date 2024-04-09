// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge() {}
//   if (input.license !== "none"){
//     return `![Github license](https://img.sheilds.io/badge/license-${license}-yellowgreen.svg)`;
//   }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== "none"){
//     return `\n* [License](#license)\n`;
// }
// }
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
// if (license !== "none"){
//   return
// }
// }
// TODO: Create a function to generate markdown for README
const input = require("inquirer/lib/prompts/input");
function generateMarkdown(data) {
  return `# ${input.title}
  by ${input.name}
  ${(input.license)}
  ${(input.license)}
  ##Description
  ${input.description}
  ## Requirements
  ${input.require}
  ##Usage
  ${input.usage}
  ##Contact Me
  * Name - ${input.name}
  * Email - ${input.email}
  * Github - [${input.creator}](https://github.com/${input.creator}/)
  ## Contributors
  ${input.contributors}
  ##Testting
  ${input.test}
  ${(input.license)}
`;
}

module.exports = generateMarkdown;
