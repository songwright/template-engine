class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    // Return name.
    return this.name;
  }
  getId() {
    // Return ID.
    return this.id;
  }
  getEmail() {
    // Return e-mail.
    return this.email;
  }
  getRole() {
    // Returns 'Employee'
    return "Employee";
  }
}

module.exports = Employee;