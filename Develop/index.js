const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, desc, install, usage, credits, license, username, emailad}) =>
 `
  # ${title}

  ## Description
  ### ${desc}
 
  ## Table of Contents
  ### - [Installation](#install)
  ### - [Usage](#usage)
  ### - [Credits](#credits)
  ### - [License](#license)
  ### - [GitHub](#username)
  ### - [Contact Me](#emailad)

  ## Installation
  ### ${install}
  
  ## Usage
  ### ${usage}
  
  ## Credit
  ### ${credits}
  
  ## License
  ### ${license}

  ## GitHub Username
  ### [My Github](${username})

  ## Email Address
  ### <a onclick="return linkRedirecter(this)" target="_blank" class="ex_link" href="https://mail.google.com/a/umn.edu/#inbox/13f62a30179692eb">${emailad}</a>
  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'desc',
      message: 'How would you describe your project to other developers?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How can other developers use your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How would you describe the usage of this application?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please list all other contributers of this application.',
    },
    {
      message: 'Please select a license from the following List.',
      name: "license",
      choices: 
            [
            new inquirer.Separator(),
            "-- Skip --",
            new inquirer.Separator(),
            "apache2", "bsd2", "bsd3",
            new inquirer.Separator(),
            "cc1", "cc4-international", "cc4-sharealike",
            new inquirer.Separator(),
            "EPL1", "GNU GPLv2", "GNU GPLv3",
            new inquirer.Separator(),
            "MIT", "Unlicense"
            ],
      type: 'list'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide a link to you your GitHub profile.',
    },
    {
      type: 'input',
      name: 'emailad',
      message: 'What is a good email adress for people to contact you about this project?',
    },
  ])
  .then((answers) => {
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your professional README.md!')
    );
  });
