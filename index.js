// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please type in the title of your project",
    name: "title",
  },

  {
    type: "list",
    message: "Please select a license",
    name: "badge",
    choices: ["Apache", "IBM", "MIT", "Peri", "No licence"],
  },

  {
    type: "input",
    message: "Please describe your application",
    name: "description",
  },

  {
    type: "input",
    message: "Please explain the usage of the application",
    name: "usage",
  },

  {
    type: "input",
    message: "Please type in the steps needed to install the application:",
    name: "installation",
  },

  {
    type: "input",
    message:
      "Please provide a description of the badge used for this application:",
    name: "lincense",
  },

  {
    type: "input",
    message:
      "If applicable, please type in all the contributors on this project:",
    name: "",
  },

  {
    type: "input",
    message:
      "Please provide any test instructions. If not applicable, leave blank.",
    name: "",
  },

  {
    type: "input",
    message: "Please provide your email address",
    name: "email",
  },

  {
    type: "input",
    message: "Please provide your GitHub username",
    name: "github",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = () => {
  console.log(questions);
  generateMarkdown();
};

// Function call to initialize app
init();
