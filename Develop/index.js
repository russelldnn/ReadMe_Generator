// TODO: Include packages needed for this application
    let generateMarkdown = require ('./utils/generateMarkdown.js');
    let fs = require ('fs');
    let inquirer = require ('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
    },

    {
        type: 'input',
        name: 'repoName',
        message: 'What is the name of your applications github repo?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Add a description for your application'
    },

    {
        type: 'input',
        name: 'install',
        message: 'How do you install the app?'
    },

    {
        type: 'input',
        name: 'goal',
        message: 'how is this app meant to be used?'
    },

    {
        type: 'input',
        name: 'acknowledgements',
        message: 'List all contributors for this project'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What tests were used in this application'
    },

    {
        type: 'list',
        name: 'license',
        message: 'what license(s) are applied to this app?',
        choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
    },

    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    }

];

// TODO: Create a function to write README file
function writeToFile(dataD) {
    fs.writeFile('README.md', dataD)
    console.log ("readme has been written")
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (appInput) {
        const dataD = generateMarkdown(appInput) ;
        writeToFile;
    })
}

// Function call to initialize app
init();
