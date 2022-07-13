// TODO: Include packages needed for this application
//requiring fs, inquirer and the generatemarkdown.js so I can use the function defined on it
    let generateMarkdown = require ('./utils/generateMarkdown.js');
    let fs = require ('fs');
    let inquirer = require ('inquirer');
// TODO: Create an array of questions for user input
//an array of prompts for inquirer to ask and record
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
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



// TODO: Create a function to initialize app
//init function surrounding a writeFile method to take the prompt answers and generate the readme based on the design
function init() {
    inquirer.prompt(questions).then(function (appInput) {
        const dataD = generateMarkdown(appInput) 
        
        fs.writeFile('README.md', dataD, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log("readme has been written")
            }
        })
        
    })
};


// Function call to initialize app
//calling the function
init();
