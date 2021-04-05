//completed - added Employee constructor
const Employee = require("./employee");

//completed - defined Engineer class
class Engineer extends Employee { 
    constructor(name, id, email, github) { // list all properties that make Engineer
        super(name, id, email);  // list super, and what comes with it
        this.github = github;    // tie class specific info to constructor 
    }
    getGitHub() {                // return github info from user response
        return this.github;
    }
    getRole() {                  //set role of engineer
        return "Engineer";
    }

};

module.exports = Engineer;