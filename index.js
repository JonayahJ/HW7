// dependencies
// fs for file writing
var fs = require("fs");

// requiring inquirer
var inquirer = require("inquirer");
const { title } = require("process");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Include your table of contents",
        name: "table of contents",
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Which licenses did you use for your project?",
        name: "license",
        choices: ["MIT", "Open Source", "Apache"]
    },
    {
        type: "input",
        message: "Who contributed to the creation of your project?",
        name: "contributors",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "questions",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
