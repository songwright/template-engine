const inquirer = require("inquirer");
const Manager = require("../Develop/lib/Manager");
const makeHTML = require("../Develop/lib/makeHTML");

const questions = [
  {
    type: "input",
    message: "To create a new team, enter the manager's name.",
    name: "mgrName"
  },
  {
    type: "input",
    message: "Enter the manager's id.",
    name: "mgrID"
  },
  {
    type: "input",
    message: "Enter the manager's e-mail address.",
    name: "mngEmail"
  },
  {
    type: "input",
    message: "Enter the manager's office number.",
    name: "mgrOffice"
  }
]

inquirer
  .prompt(questions)
  .then(answers => {
    let manager1 = new Manager(answers.mgrName, answers.mgrID,
      answers.mngEmail, answers.mgrOffice);
      let html = makeHTML.makeHTML(manager1);
      console.log(html);
  })
  .catch(function(error) {
    console.log(error);
  })

