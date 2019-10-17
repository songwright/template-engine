// Required
const inquirer = require("inquirer");
const confirm = require('inquirer-confirm');
const Manager = require("../Develop/lib/Manager");
const Intern = require("../Develop/lib/Intern");
const Engineer = require("../Develop/lib/Engineer");
const makeMgrHTML = require("./lib/makeMgrHTML");
const makeIntHTML = require("./lib/makeIntHTML");
const makeEngHTML = require("./lib/makeEngHTML");

// Inquirer questions //
// Manager
const mgrQuestions = [
  {
    type: "input",
    message: "To create a new team, enter the manager's name:",
    name: "mgrName"
  },
  {
    type: "input",
    message: "Enter the manager's id:",
    name: "mgrID"
  },
  {
    type: "input",
    message: "Enter the manager's e-mail address:",
    name: "mgrEmail"
  },
  {
    type: "input",
    message: "Enter the manager's office number:",
    name: "office"
  }
]

// Choose next team role
const teamQuestions = [
  {
    type: "list",
    message: "Choose the role of your next team member:",
    name: "member",
    choices: ["Intern", "Engineer"]
  }
]

// Intern questions
const intQuestions = [
  {
    type: "input",
    message: "what is the intern's name?",
    name: "intName"
  },
  {
    type: "input",
    message: "Enter the intern's id:",
    name: "intID"
  },
  {
    type: "input",
    message: "Enter the intern's e-mail address:",
    name: "intEmail"
  },
  {
    type: "input",
    message: "Enter the intern's school:",
    name: "school"
  }
]

// Engineer questions
const engQuestions = [
  {
    type: "input",
    message: "what is the engineer's name?",
    name: "engName"
  },
  {
    type: "input",
    message: "Enter the engineer's id:",
    name: "engID"
  },
  {
    type: "input",
    message: "Enter the engineer's e-mail address:",
    name: "engEmail"
  },
  {
    type: "input",
    message: "Enter the engineer's gitHub user name:",
    name: "github"
  }
]

// Function definitions //

function team() {
  inquirer
    .prompt(teamQuestions)
    .then(team => {
      if (team.member === "Intern") {
        intern();
      } else {
        engineer();
      }
    })
    .catch(function(error) {
      console.log(error);
    })
}

function intern() {
  inquirer
    .prompt(intQuestions)
    .then(intern => {
      let newIntern = new Intern(intern.intName, intern.intID, intern.intEmail, intern.school);
      let html = makeIntHTML.makeIntHTML(newIntern);
      console.log(html);
      confirm("Continue adding team members?")
        .then(function confirmed() {
          team();
        }, function cancelled() {
          console.log("Team completed.");
        });
    })
    .catch(function(error) {
      console.log(error);
    })
}

function engineer() {
  inquirer
    .prompt(engQuestions)
    .then(engineer => {
      let newEngineer = new Engineer(engineer.engName, engineer.engID, engineer.engEmail, engineer.github);
      let html = makeEngHTML.makeEngHTML(newEngineer);
      console.log(html);
      confirm("Continue adding team members?")
        .then(function confirmed() {
          team();
        }, function cancelled() {
          console.log("Team completed.");
        });
    })
    .catch(function(error) {
      console.log(error);
    })
}

// Begin creating the team
inquirer
  .prompt(mgrQuestions)
  .then(manager => {
    let newManager = new Manager(manager.mgrName, manager.mgrID,
      manager.mgrEmail, manager.office);
      let html = makeMgrHTML.makeMgrHTML(newManager);
      console.log(html);
      team();
  })
  .catch(function(error) {
    console.log(error);
  })

