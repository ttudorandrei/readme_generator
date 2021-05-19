//required modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown.js");
const createGeneratedFile = util.promisify(fs.writeFile);

const questions = [
  {
    type: "input",
    message: "Please Choose a file name",
    name: "filename",
  },

  {
    type: "list",
    message: "Please choose a file extension",
    name: "extension",
    choices: ["md", "txt"],
  },

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
    name: "license",
  },

  {
    type: "input",
    message:
      "Please please add a link of a screenshot that captures your working application (if not available, press enter):",
    name: "screenshot",
  },

  {
    type: "input",
    message:
      "Please type in the Alt-Text for the screenshot (if not available, press enter):",
    name: "altText",
  },

  {
    type: "input",
    message:
      "If applicable, please type in all the contributors on this project:",
    name: "contributors",
    default: "Not applicable",
  },

  {
    type: "input",
    message: "Please provide any test instructions.",
    name: "test",
    default: "Not applicable",
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

//this will prompt the user with the questions, collect the answers and generates the .md file with the answers collected
const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const generatedData = generateMarkdown(answers);
    await createGeneratedFile(
      `${answers.filename}.${answers.extension}`,
      generatedData
    );
    console.info("The file was SUCCESSFULLY generated!");
  } catch (err) {
    console.log(err);
  }
};

// Function call to initialize app
init();
