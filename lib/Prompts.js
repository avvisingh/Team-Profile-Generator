const inquirer = require('inquirer');
const chalk = require('chalk');
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const RoleSelectionOptions = ["Manager", "Engineer", "Intern", "Team Complete"];

let promptRole = () => {
    inquirer.prompt([{
        type: 'list',
        message: "Please select your employee's role",
        name: "role",
        choices: [...RoleSelectionOptions]
    }]);   
}

let promptEmployeeBase = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter the Employee's name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter he Employee's id:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the Employee's email:",
            name: "email",
        }
    ]);
}

let promptManager = () => {
    return inquirer.prompt([{
            type: "input",
            message: "Please enter the Manager's office number:",
            name: "officeNumber"
        }]);
}

let promptEngineer = () => {
    return inquirer.prompt([{
            type: "input",
            message: "Please enter the Engineer's GitHub url:",
            name: "github",
        }]);
}

let promptIntern = () => {
    return inquirer.prompt([{
            type: "input",
            message: "Please enter user school:",
            name: "school"
        }]);
}

async function getTeamInfo() {
    let wantsToBuildTeam = true;
    let teamlist = [];
    while (wantsToBuildTeam) {

    }
}