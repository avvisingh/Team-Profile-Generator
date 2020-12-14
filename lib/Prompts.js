const inquirer = require('inquirer');
const chalk = require('chalk');
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { red } = require('chalk');
const { registerPrompt } = require('inquirer');

const RoleSelectionOptions = ["Manager", "Engineer", "Intern", "Team Profile Complete"];
const promptRole = () => {
    return inquirer.prompt([{
        type: 'list',
        message: "Please select your employee's role",
        name: "role",
        choices: [...RoleSelectionOptions]
    }]);   
}

const promptEmployeeBase = () => {
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

const promptManager = () => {
    return inquirer.prompt([{
            type: "input",
            message: "Please enter the Manager's office number:",
            name: "officeNumber"
        }]);
}

const promptEngineer = () => {
    return inquirer.prompt([{
            type: "input",
            message: "Please enter the Engineer's GitHub url:",
            name: "Github",
        }]);
}

const promptIntern = () => {
    return inquirer.prompt([{
            type: "input",
            message: "Please enter the Intern's school:",
            name: "school"
        }]);
}

async function getTeamInfo() {
    var wantsToBuildTeam = true;

    let teamlist = [];

    while (wantsToBuildTeam) {

        let {role} = await promptRole();

        if (role === 'Manager') {
            let {name: managerName, id: managerId, email: managerEmail} = await promptEmployeeBase();
            let {officeNumber} = await promptManager();
            let manager = new Manager(managerName, managerId, managerEmail, officeNumber);
            teamlist.push(manager);

        } else if (role === 'Engineer') {
            let {name: EngineerName, id: EngineerId, email: EngineerEmail} = await promptEmployeeBase();
            let {Github} = await promptEngineer();
            let engineer = new Engineer(EngineerName, EngineerId, EngineerEmail, Github);
            teamlist.push(engineer);

        } else if (role === 'Intern') {
            let {name: InternName, id: InternId, email: InternEmail} = await promptEmployeeBase();
            let {school} = await promptIntern();
            let intern = new Intern(InternName, InternId, InternEmail, school);
            teamlist.push(intern);

        } else {
            //This takes place if user select team-complete option
            wantsToBuildTeam = false;
        }

        console.log(teamlist);
    }

    return teamlist;
};

module.exports = {
    getTeamInfo: getTeamInfo
}