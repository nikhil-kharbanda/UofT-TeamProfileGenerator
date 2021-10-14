/* Require Inquirer */
const inquirer = require("inquirer");

/* Require file system and util */
const fs = require("fs");
const util = require("util");

/* Require js files created in lib test*/
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

/* Require htmlTemp js file to crate the HTML template */
const htmlPage = require("./src/htmlTemp");

/* This is used to write to file */
const writeFileAsync = util.promisify(fs.writeFile);

/* Append an employee to array */
let teamArray = [];
let teamStr = ``;

/* Get inquirer to ask these questions first. Called in prompt question */
const promptQuestions = [
  {
    type: "input",
    name: "name",
    message: "Employee's name?",
  },

  {
    type: "input",
    name: "id",
    message: "Employee's ID number?",
  },

  {
    type: "input",
    name: "email",
    message: "Employee's email?",
  },

  {
    type: "list",
    name: "role",
    message: "Employee's role?",
    choices: ["Engineer", "Intern", "Manager"],
  },
];

/* Ask these questions if role set to engineer */
const promptEngineer = [
  {
    type: "input",
    name: "gitUser",
    message: "Engineer's GitHub?",
  },
];

/* Ask these questions if role set to intern */
const promptIntern = [
  {
    type: "input",
    name: "school",
    message: "Intern's School?",
  },
];

/* Ask these questions if role set to manager */
const promptManager = [
  {
    type: "input",
    name: "phone",
    message: "Manager's office number?",
  },
];

/* Ask these questions once all questions have been asked */
const promptDone = [
  {
    type: "list",
    name: "finish",
    message: "Add any more?",
    choices: ["Yes", "No"],
  },
];

/*
After some thorough searching, I had discorvered to make a conditinal inquirer prompt, I had to look into async statements.
Async statements is a workaround for spliting a big prompt into several.
This allows the "await" keyword, which can enable asynchonous, promise-based behaviour
*/
async function prompt() {
  let responseDone = {};
  responseDone.finish = "No";

  // make a do-while loop. The first instance HAS to run. Breaks once condition in while statement becomes false
  do {
    try {
      //Gather response1 responses as an object
      let response1 = await inquirer.prompt(promptQuestions);

      //checks roles and ask questions accordingly. 
      //From there, creates that employee type as an object with set params (name, id, email) as well as unique params depending on role (github, school, office#).
      //Appends employee to teamArray

      if (response1.role === "Engineer") {
        let response2 = await inquirer.prompt(promptEngineer);
        const engineer = new Engineer(
          response1.name,
          response1.id,
          response1.email,
          response2.gitUser
        );
        console.log(engineer);
        teamArray.push(engineer);
      } else if (response1.role === "Intern") {
        let response2 = await inquirer.prompt(promptIntern);
        const intern = new Intern(
          response1.name,
          response1.id,
          response1.email,
          response2.school
        );
        console.log(intern);
        teamArray.push(intern);
      } else {
        let response2 = await inquirer.prompt(promptManager);
        const manager = new Manager(
          response1.name,
          response1.id,
          response1.email,
          response2.phone
        );
        console.log(manager);
        teamArray.push(manager);
      }
    } catch (err) {
      console.error();
    }

    //Ask user if they want to add more employees
    responseDone = await inquirer.prompt(promptDone);

    //If prev question response was yes, loop back to top. If response was no, exit do-while loop
  } while (responseDone.finish === "Yes");

  //Print the teamArray to see if correct output
  console.log(teamArray);
 
  //call function to deal with outputs to display on html page
  htmlPageGen();
}

function htmlPageGen() {
  //For each employee, want to create a card. These cards would then get appended to generate the final html page
  for (let i = 0; i < teamArray.length; i++) {
    teamStr = teamStr + htmlPage.generateCard(teamArray[i]);
    // console.log(teamStr);
  }

  //Create the new HTML index
  let finalHtml = htmlPage.generateHTML(teamStr);

  // console.log(teamStr);

  //Overwrite to index file 
  writeFileAsync("./output/index.html", finalHtml);
}

prompt();
