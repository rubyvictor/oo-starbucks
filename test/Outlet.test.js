var Outlet = require("../src/Outlet");
var Owner = require("../src/Owner");
var Menu = require("../src/Menu");

describe("Outlet", () => {
  it('has an Owner, a menu and should get an instance of Outlet', () => {
    var menu = new Menu();
    var owner = new Owner();
    var outlet = new Outlet(owner,menu);

    expect(outlet.menu).toEqual(menu);
    expect(outlet.owner).toEqual(owner);
    
  });

});
