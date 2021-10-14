// const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Can create Emplyee as Object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arg", () => {
    const name = "Nick";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Can set id via constructor arg", () => {
    const testVal = 100;
    const emp = new Employee("Foo", testVal);
    expect(emp.id).toBe(testVal);
});

test("Can set email via constructor arg", () => {
    const testVal = "test@test.ca"
    const emp = new Employee("Foo", 1, testVal)
    expect(emp.email).toBe(testVal);
});

test("Can get name via getName()", () => {
    const testVal = "Nick";
    const emp = new Employee (testVal);
    expect(emp.getName()).toBe(testVal);
});

test("Can get id via getId()", () => {
    const testVal = 100;
    const emp = new Employee ("Foo", testVal);
    expect(emp.getId()).toBe(testVal);
});

test("Can get email via getEmail()", () => {
    const testVal = "test@test.ca";
    const emp = new Employee ("Foo", 1, testVal);
    expect(emp.getEmail()).toBe(testVal);
});

test("Using getRole(), should return Employee", () => {
    const testVal = "Employee";
    const emp = new Employee("Nick", 1, "test@test.ca");
    expect(emp.getRole()).toBe(testVal);
})