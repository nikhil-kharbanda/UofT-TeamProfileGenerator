const Intern = require("../lib/Intern");

test("Can set school via constructor arg", () => {
  const testVal = "Carleton Univeristy";
  const emp = new Intern("Foo", 1, "test@test.com", testVal);
  expect(emp.school).toBe(testVal);
});

test("getRole() should return Intern", () => {
  const testVal = "Intern";
  const emp = new Intern("Foo", 1, "test@test.com", "Carleton Univeristy");
  expect(emp.getRole()).toBe(testVal);
});

test("Can get school via getSchool()", () => {
  const testVal = "Carleton Univeristy";
  const emp = new Intern("Foo", 1, "test@test.com", testVal);
  expect(emp.getSchool()).toBe(testVal);
});