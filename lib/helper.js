class Character {
  constructor(name, strength, hitPoints) {
    if (!name) {
      throw new Error("You are missing a name.");
    }
    // Accept arguments
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following: `);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} is dead!`);
      return false;
    }
      console.log(`${this.name} is alive. Hit points = ${this.hitPoints}`);
      return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    let result = opponent.hitPoints - this.strength;
    opponent.hitPoints -= this.strength;
    console.log(`${this.name} has attacked ${opponent.name} and caused ${this.strength} damage. ${opponent.name}'s hit points are now: ${result}`);
  }
}

// Create two unique characters using the "character" class
let orc1 = new Character("Lurtz", 18, 100);
let gondorian1 = new Character("Boromir", 16, 80);
// Create an interval that alternates attacks every 2000 milliseconds

///////////////////////////////////////////////////////////////////

// HTML Templates
const createHtml = function(num1, num2) {
	return `<div>
		<p>${sumNumbers(num1, num2)}</p>
	</div>`
}
​
// Function definitions
function sumNumbers(x,y) {
	return x + y
}
​
// Methods
let html = createHtml(2,2);
console.log(html);

///////////////////////////////////////////////////////////////////

let data = ['foo','bar','baz'];
let html =
`
<html>
<head>
  <title>test</title>
</head>
<body>
  <div>header</div
  ${getContent(data)}
  <div>footer</div>
</body>
<html>
`

function getContent(data) {
  return `<div>\n${getList(data)}\n    </div>`;
}
function getList(data) {
  return `      <ul>\n${getListItems(data)}\n      </ul>`
}
function getListItems(data) {
  return data.map(element => {
    return `          <li>${element}</li>`;
  }).join('\n');
}
console.log(html);

///////////////////////////////////////////////////////////////////

function returnPromise() {
  return inquirer
  .prompt({
      type: 'input',
      message: 'What does this function return?',
      name: 'answer'
  })
}

returnPromise()
.then(answerObject => 
  console.log('response object', answerObject)
)