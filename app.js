const inquirer = require("inquirer");
const Manager = require("../Develop/lib/Manager");

const questions = [
  {
    type: "input",
    message: "To create a new team, enter the manager's name.",
    name: "managerName"
  },
  {
    type: "input",
    message: "Enter the manager's id.",
    name: "managerID"
  },
  {
    type: "input",
    message: "Enter the manager's e-mail address.",
    name: "managerEmail"
  },
  {
    type: "input",
    message: "Enter the manager's office number.",
    name: "managerOffice"
  }
]

inquirer
  .prompt(questions)
  .then(answers => {
    let manager1 = new Manager(answers.managerName, answers.managerID,
      answers.managerEmail, answers.managerOffice);
      console.log(manager1);
    })