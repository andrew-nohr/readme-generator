// Included packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generatemarkdown = require ('./utils/generateMarkdown');

// Created an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions for this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license type for this application?',
        choices: ['Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU GPLv3', 'GNU LGPLv3', 'MIT', 'Mozilla Public Licesne 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-mail address?'
    },
];

// Created a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Generating your README');
        writeToFile('README.MD', generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
