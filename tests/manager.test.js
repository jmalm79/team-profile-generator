const Manager = require('../lib/manager.js');

describe('Manger Test', () => {
    describe(`getofficeNumber`, () => {
        it('Test responses from user for Manager Office', () => { 
        const officeNumber = "1";
        const employee = new Manager ('test', 1, 'test@email.com', InternSchool);
        expect(employee.getOffice()).tobe(officeNumber);
    });

});
});