const Engineer = require('../lib/engineer.js');
const Intern = require('../lib/engineer.js');

describe('Engineer Test', () => {
    describe(`getgitHub`, () => {
        it('Test responses from user for GitHub username', () => { 
        const github = "jmalm79";
        const employee = new Engineer ('test', 1, 'test@email.com', github);
        expect(employee.getGitHub()).tobe(github);
    });

});
});