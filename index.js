// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your programs title?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe what your program does?",
    name: "description",
  },
  {
    type: "input",
    message: "How to instal your program?",
    name: "instal",
  },
  {
    type: "input",
    message: "Explain how to use your program?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who was involved in your programs development?",
    name: "credit",
  },
  {
    type: "list",
    message: "Licenses used:",
    choices: ["Apache", "GNU", "npm packages", "OpenBSD", "Rust", "WordPress"],
    name: "license",
  },
  {
    type: "input",
    message: "Tests you have made for your program",
    name: "test",
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", markDown(data), (data) => {
      console.log("Success!");
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
