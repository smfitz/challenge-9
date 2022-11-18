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
  
  ## Credits
  ### ${credits}
  
  ## License
  ### ${license}

  ## GitHub Username
  ### ${username}

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
      type: 'input',
      name: 'license',
      message: 'What GitHub License would you like to use for this project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
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
