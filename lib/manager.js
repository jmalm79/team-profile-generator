//completed - added Employee constructor
const Employee = require('./employee');

//completed - defined Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {  // list all properties that make Manager
        super(name, id, email);                   // super - and everything that comes with it  
        this.officeNumber = officeNumber;         // tie class spefic info to constructor
    }
    getOfficeNumber() {
        return this.officeNumber;                  // return office number from user response
    }
    getRole() {
        return "Manager";                           // set role of Manager
    }
};




module.exports = Manager;