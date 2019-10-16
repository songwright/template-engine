const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {

    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;