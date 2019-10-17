const inquirer = require("inquirer");
const Manager = require("../Develop/lib/Manager");
const makeHTML = require("../Develop/lib/makeHTML");

const mgrQuestions = [
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
    name: "mgrEmail"
  },
  {
    type: "input",
    message: "Enter the manager's office number.",
    name: "mgrOffice"
  }
]

const teamQuestions = [
  {
    type: "list",
    message: "Choose the role of your next team member.",
    name: "member",
    choices: ["Intern", "Engineer"]
  }
]

function team() {
  inquirer
    .prompt(teamQuestions)
    .then(team => {
      if (team.member === "Intern") {
        console.log("Intern")
      } else {
        console.log("Engineer")
      }
    })
    .catch(function(error) {
      console.log(error);
    })
}

inquirer
  .prompt(mgrQuestions)
  .then(manager => {
    let manager1 = new Manager(manager.mgrName, manager.mgrID,
      manager.mgrEmail, manager.mgrOffice);
      let html = makeHTML.makeHTML(manager1);
      console.log(html);
      team();
  })

  .catch(function(error) {
    console.log(error);
  })

