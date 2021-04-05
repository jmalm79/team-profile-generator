// list of my node packages 

const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath =  path.join(OUTPUT_DIR, "index.html");
const generateHTML = require('./utils/generateHTML.js');

const html = './dist/index.html';



function writeToFile(fileName, data){
    fs.writeToFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('HTML Created')
    );
};


function writeManager(html, response){
    fs.appendFile(html, response)
};

function writeEngineer(html, response){
    fs.appendFile(html, response)
};

function writeIntern(html, response){
    fs.appendFile(html, response)
};

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamInfo = [];

//complete create questions arrays for Manager, Engineer, Intern
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
        name: "EngineerId",
    },
    {
        type: "input",
        message: "What is the Engineers Email Address?",
        name: "EngineerEmail",
    },
    {
        type: "input",
        message: "What is the Engineers GitHub name?",
        name: "EngineerGithub",
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
        // teamInfo.push(manager);
        // console.log(manager);
        console.log(teamInfo);
    nextEmployee();
    })
}

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
            appendEnd(html, generateHTML.endHTML(response))
        }
    })
};

function engineerAnswers(){
    inquirer.prompt(engineerQuestions).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        writeEngineer(html, generateHTML.createEngineer(engineer))
        // teamInfo.push(engineer);
        console.log(teamInfo);
    
    nextEmployee();
    })
};


function internAnswers(){
    inquirer.prompt(internQuestions).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        writeIntern(html, generateHTML.createIntern(intern))
        // teamInfo.push(intern);
        console.log(teamInfo);
    nextEmployee();
    })
};
 

const init = () => {
    fs.writeFileSync(outputPath, JSON.stringify(generateHTML(teamInfo)),  (err) =>
    err ? console.error(err) : console.log('HTML Created')
    );
    managerAnswers();
};

init();



