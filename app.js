const inquirer = require("inquirer");

const main = require("./main");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What wiki url you'd like to check out?",
    },
  ]);
}

promptUser().then(function (answers) {
  return main(answers["name"]);
});
