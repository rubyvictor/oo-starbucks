var Menu = require("../src/Menu");

describe('Menu', () => {
    it('has a list of items', () => {
        var items = ["tea","coffee"];
        var menu = new Menu(items);
        expect(menu.items).toEqual(items);
        expect(menu.items).toEqual(["tea","coffee"]);
    
    });
});