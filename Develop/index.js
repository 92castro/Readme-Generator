// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: "input",
      message: "Provide a title for your project:",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Provide a brief description of your project:",
      name: "description",
    },
    {
      type: "list",
      message: "Would you like to add a Table of Contents?",
      choices: ["Yes", "No"],
      name: "tableOfContents",
    },
    {
      type: "input",
      message: "Provide the steps required to install your project (if any):",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use:",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators (if any):",
      name: "credits",
    },
    {
      type: "list",
      message: "Select the appropriate license for your project:",
      choices: [
        "Apache 2.0",
        "Artistic 2.0",
        "ISC",
        "MIT",
        "Mozilla Public 2.0",
        "The Unlicense",
      ],
      name: "license",
    },
    {
      type: "list",
      message: "Select the corresponding badge for your license:",
      choices: [
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
      ],
      name: "badge",
    },
    {
      type: "input",
      message: "Provide any tests for your application (if any)",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub?",
      name: "gitHub",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])

  .then((response) => {
    fs.writeFile("readme.md", JSON.stringify(response), (err) => {
      err ? console.error(err) : console.log("success");
    });
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
