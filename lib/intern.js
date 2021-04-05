//completed - added Employee constructor
const Employee = require('./employee');

//completed - defined Intern class
class Intern extends Employee { 
    constructor(name, id, email, school) { // list all properties that make Intern{
        super(name, id, email);    // list super, and what comes with it
        this.school = school;
    }

    getSchool () {                 // return school info
        return this.school;
    }
    getRole () {
        return "Intern";            //set role of Intern
    }
};

module.exports = Intern;             