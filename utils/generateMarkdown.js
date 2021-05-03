// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const githubProfile = `https://github.com/${data.github}`;
  console.log("hello generated markdown");
  const generatedData = `# ${data.title}
  ![${data.badge}](https://img.shields.io/badge/license-${data.badge}-green)

  ## Description
    ${data.description}
    
  ## Table of Contents
  - [Description](#Description)
  
  ## Usage
    ${data.usage}
    
  ## Installation
    ${data.installation}
  
  ## License
    ${data.badge}
    ${data.license}
  
  ## Contributors
    ${data.contributors}
    
  ## Tests
    ${data.test}
    
  ## Questions
  If you have any questions regarding this app, please contact me via:
  - Email at ${data.email}
  - GitHub at <${githubProfile}>`;
  console.log(generatedData);
};

module.exports = generateMarkdown;
