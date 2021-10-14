const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testVal = 100;
  const emp = new Manager("Foo", 1, "test@test.com", testVal);
  expect(emp.officeNumber).toBe(testVal);
});

test("getRole() should return Manager", () => {
  const testVal = "Manager";
  const emp = new Manager("Foo", 1, "test@test.com", 100);
  expect(emp.getRole()).toBe(testVal);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});