var Owner = require("../src/Owner");

describe('Owner', () => {
    it('should create an instance of Owner', () => {
        var owner = new Owner();
        
        expect(owner).toEqual(owner);
        expect(owner).toBeDefined();
        expect(owner).toBeInstanceOf(Owner);
    });
});
