const generateMarkdown = (data) => {
  const {
    title,
    badge,
    description,
    usage,
    installation,
    license,
    contributors,
    test,
    email,
    github,
  } = data;

  const githubProfile = `https://github.com/${github}`;
  console.log("hello generated markdown");
  return `# ${title}
  ![${badge}](https://img.shields.io/badge/license-${badge}-green)

  ## Description
    ${description}

  ## Table of Contents
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)

  
  ## Usage
    ${usage}
    
  ## Installation
    ${installation}
  
  ## License
    ${badge}
    ${license}
  
  ## Contributors
    ${contributors}
    
  ## Tests
    ${test}
    
  ## Questions
  If you have any questions regarding this app, please contact me via:
  - Email at ${email}
  - GitHub at <${githubProfile}>`;
};

module.exports = generateMarkdown;
