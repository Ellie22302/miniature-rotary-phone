// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index.js');

function renderLicenseBadge(license) {
let badge = '';
if(license === 'MIT') {
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
} else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
} else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'Boost1.0') {
    badge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
  } else if (license === 'BSD3') {
    badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
    if(license === 'MIT') {
      licenseLink = 'https://opensource.org/licenses/MIT'
} else if (license === 'Apache 2.0') {
  licenseLink = 'https://opensource.org/licenses/Apache-2.0'
} else if (license === 'GPL v3.0') {
  licenseLink = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'Boost1.0') {
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
  } else if (license === 'BSD3') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
    licenseLink = ""
  }
  return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
if (license !== "none"){
  return
}
}
// TODO: Create a function to generate markdown for README
const input = require("inquirer/lib/prompts/input");
function generateMarkdown(data) {
  return `# ${input.title}
  by ${input.name}
  ${renderLicenseBadge(input.license)}
  ${renderLicenseLink(input.license)}
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
  ${renderLicenseSection(input.license)}
`;
}

module.exports = generateMarkdown;
