const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can set GitHub username via constructor arg", () =>{
    const testVal = "GitHubUser";
    const emp = new Engineer("Foo", 1, "test@test.ca", testVal);
    expect(emp.github).toBe(testVal);
});

test("Using getRole(), should return Engineer", () => {
    const testVal = "Engineer";
    const emp = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(emp.getRole()).toBe(testVal);
});

test("Using getGitHub(), should return the github username", () => {
    const testVal = "GitHubUser";
    const emp = new Engineer ("Foo", 1, "test@test.ca", testVal);
    expect(emp.getGitHub()).toBe(testVal);
});