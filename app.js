const inquirer = require("inquirer");
const confirm = require('inquirer-confirm');
const Manager = require("../Develop/lib/Manager");
const Intern = require("../Develop/lib/Intern");
const makeMgrHTML = require("./lib/makeMgrHTML");
const makeIntHTML = require("./lib/makeIntHTML");

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
    name: "office"
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

const intQuestions = [
  {
    type: "input",
    message: "what is the intern's name?",
    name: "intName"
  },
  {
    type: "input",
    message: "Enter the intern's id.",
    name: "intID"
  },
  {
    type: "input",
    message: "Enter the intern's e-mail address.",
    name: "intEmail"
  },
  {
    type: "input",
    message: "Enter the intern's school.",
    name: "school"
  }
]

function team() {
  inquirer
    .prompt(teamQuestions)
    .then(team => {
      if (team.member === "Intern") {
        intern();
      } else {
        console.log("Engineer")
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

