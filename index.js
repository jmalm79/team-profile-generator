const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./utils/generateHTML.js');

const html = './dist/index.html';

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamInfo = [];

function writeTeamInfo(fileName, data){
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('')
    );
};

function writeManager(fileName, data){
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Manager Added!')
    );
};

function writeEngineer(fileName, data){
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Engineer Added!')
    );
};

function writeIntern(fileName, data){
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Intern Added!')
    );
};

function appendEndHTML(fileName, data){
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Finished Creating HTML')
    );
};

const managerQuestions = [
    {
        type: "input",
        message: "What is the Managers Name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the Managers ID?",
        name: "managerId",
    },
    {
        type: "input",
        message: "What is the Managers Email Address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the Managers Office number?",
        name: "managerOffice",
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the Engineers Name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the Engineers ID?",
        name: "engineerId",
    },
    {
        type: "input",
        message: "What is the Engineers Email Address?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the Engineers GitHub name?",
        name: "engineerGithub",
    },
];

const internQuestions = [
    {
        type: "input",
        message: "What is the Interns Name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is the Interns ID?",
        name: "internId",
    },
    {
        type: "input",
        message: "What is the Interns Email Address?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What is the Interns School name?",
        name: "internSchool",
    },
];

function managerAnswers(){
    inquirer.prompt(managerQuestions).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
        writeManager(html, generateHTML.createManager(manager))
        console.log(teamInfo);
    nextEmployee();
    })
};

const nextEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nxtEmply",
            message: "Would you like to add another Employee? (Engineer, Intern, or 'I am finished'?)",
            choices: ["Engineer", "Intern", "I am finished."],
        },
    ]).then(data => {
        const role = data.nxtEmply;
        if (role === "Engineer") {
            engineerAnswers();
        } else if (role === "Intern") {
            internAnswers();
        } else if (role === "I am finished.") {
            appendEndHTML(html, generateHTML.endHTML());  
        }    
});
}

function engineerAnswers(){
    inquirer.prompt(engineerQuestions).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        writeEngineer(html, generateHTML.createEngineer(engineer))
        console.log(teamInfo);
    
    nextEmployee();
    })
};


function internAnswers(){
    inquirer.prompt(internQuestions).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        writeIntern(html, generateHTML.createIntern(intern))
        console.log(teamInfo);
    nextEmployee();
    })
};
 
const init = () => {
    writeTeamInfo(html, generateHTML.generateHTML());
    managerAnswers();
}

init();