//this function will generate the text in the file based on user input
const generateMarkdown = (data) => {
  //destructured data object
  const {
    title,
    badge,
    description,
    usage,
    installation,
    license,
    screenshot,
    altText,
    contributors,
    test,
    email,
    github,
  } = data;

  //code to dynamically construct GitHub profile URL
  const githubProfile = `https://github.com/${github}`;

  //this snippet will add the screenshot section if the associated fields are completed. If skipped, the section will not be added
  const isScreenshot = () => {
    if (!altText || !screenshot) {
      return "";
    } else {
      return `## Screenshot
  ![${altText}](${screenshot})`;
    }
  };

  const isTableOfContentsScreenshotSection = () => {
    if (!altText || !screenshot) {
      return "";
    } else {
      return `- [Screenshot](#Screenshot)`;
    }
  };

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
  ${isTableOfContentsScreenshotSection()}
  - [Tests](#Tests)
  - [Questions](#Questions)

  
  ## Usage
  ${usage}
    
  ## Installation
  \`\`\`${installation}\`\`\`
  
  
  ## License
  ${badge}
  ${license}
  
  ## Contributors
  ${contributors}
    
  ${isScreenshot()}

  ## Tests
  ${test}
    
  ## Questions
  If you have any questions regarding this app, please contact me via:
  - Email at ${email}
  - GitHub at <${githubProfile}>`;
};

// exports the generateMarkdown function
module.exports = generateMarkdown;
