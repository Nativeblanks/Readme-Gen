// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer')


//  Prompt the user
inquirer
    .prompt({
    type: "input",
    name: "name",
    message: "Enter your name: "
},
{
    type: "input",
    name: "title",
    message: "Enter the title of your application or program: "
},
{
    type: "input",
    name: "description",
    message: "Please add a description: "
},
{
    type: "input",
    name: "installation",
    message: "Enter Installation instructions: ",
    
},
{
    type: "input",
    name: "usage",
    message: "Enter insturction on how to use your application: "
},
{
    type: "input",
    name: "contributing",
    message: "Enter contributing guidelines: "
},
{
    type: "input",
    name: "test",
    message: "Enter test instructions: "
},
{
    type: "list",
    name: "license",
    message: "Select your license",
    choices: [
        "Apache license 2.0",
        "Artistic license 2.0",
        "Boost Software License 1.0",
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause license',
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',
        'Do What The F*ck You Want To Public License',
        'Eclipse Public License 1.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License v3.0',
        'ISC',
        'MIT',
        'Mozilla Public License 2.0',
        'SIL Open Font License 1.1',
        'The Unlicense',
        'zLib License'
    ]
},
{
    type: "input",
    name: "github",
    message: "Enter yout GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Enter yout email address: "
},
    );



// TODO: Create a function to write README file
const fileName = data.name + '.json'
function writeToFile(fileName, data) {
    fsPromises.writeFile(fileName, Jsonstrigify(data,))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
