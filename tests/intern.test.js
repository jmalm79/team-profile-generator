const Intern = require('../lib/intern.js');

describe('Intern Test', () => {
    describe(`getSchool`, () => {
        it('Test responses from user for Intern School', () => { 
        const school = 'UofM';
        const employee = new Intern ('test', 1, 'test@email.com', internSchool);
        expect(employee.getSchool()).tobe(school);
    });

});
});