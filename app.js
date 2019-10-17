// Required
const inquirer = require("inquirer");
const confirm = require('inquirer-confirm');
const Manager = require("../Develop/lib/Manager");
const Intern = require("../Develop/lib/Intern");
const Engineer = require("../Develop/lib/Engineer");
const makeMgrHTML = require("./lib/makeMgrHTML");
const makeIntHTML = require("./lib/makeIntHTML");
const makeEngHTML = require("./lib/makeEngHTML");

// Variables
let pageHTML = '';
let pageTop = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  <title>My Team</title>
  <style>
    *{
      box-sizing: border-box;
    }
    .card-body {
      background-color: #eee;
    }
    .jumbotron {
      background-color: red;
      color: white;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <header class="jumbotron">
    <h1>My Team</h1>
  </header>
  <div class="card-deck" id="team-deck">
    <!-- Cards go here. -->
`;
const pageBottom = `
  </div>
</body>
</html>
`;

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

// Ask: Intern or engineer?
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

// Make an intern
function intern() {
  inquirer
    .prompt(intQuestions)
    .then(intern => {
      let newIntern = new Intern(intern.intName, intern.intID, intern.intEmail, intern.school);
      let html = makeIntHTML.makeIntHTML(newIntern);
      pageTop += html;
      console.log(pageTop);
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

// Make an engineer
function engineer() {
  inquirer
    .prompt(engQuestions)
    .then(engineer => {
      let newEngineer = new Engineer(engineer.engName, engineer.engID, engineer.engEmail, engineer.github);
      let html = makeEngHTML.makeEngHTML(newEngineer);
      pageTop += html;
      console.log(pageTop);
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

// Render the team page
function renderPage(fileName, data) {

  fs.writeFile("../Develop/output/output.html", pageHTML, function(err) {
    if (err) {
      return console.log(err)
    }
    console.log("Team page rendered");
  })
}

// Begin creating the team
inquirer
  .prompt(mgrQuestions)
  .then(manager => {
    let newManager = new Manager(manager.mgrName, manager.mgrID,
      manager.mgrEmail, manager.office);
      let html = makeMgrHTML.makeMgrHTML(newManager);
      pageTop += html;
      console.log(pageTop);
      team();
  })
  .catch(function(error) {
    console.log(error);
  })

