// included packages needed
const fs = require('fs');
const inquirer = require('inquirer');


// created an array of questions to prompt user
const questions = [{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: "What is your project's name?",
    name: 'projname',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'description',
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'Apache', 'None']
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies',
    name: 'commandDepend',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'commandTest',
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'repoInfo',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'repoContrib',
  },];


// used inquirer to prompt the user to answer 
inquirer
.prompt(questions)
.then((response) => {
  console.log(response)
//   response.confirm === response.password
    console.log('Generating README...')
    writeToFile('README.md', `
    # ${response.projname}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)

## Installation

${response.commandDepend}

## Usage

${response.repoInfo}

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

## Test

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${response.license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![${response.license}](https://img.shields.io/badge/license-${response.license}-blue)


## How to Contribute

${response.repoContrib}

## Questions

https://github.com/${response.username}/
You can reach me here: ${response.email}

    `)

}
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
