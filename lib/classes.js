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

class Manager extends Employee {
  constructor(name, id, email, office) {
    // const office = 0;
    
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;

  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

const manager1 = new Manager("Cindy", 40, "c@mail.com", 10);
console.log(`Manager stats - Name: ${manager1.name}, id: ${manager1.id}, 
  email: ${manager1.email}, office: ${manager1.office}`);
console.log(manager1.getRole());

