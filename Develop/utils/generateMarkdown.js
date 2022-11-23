// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${data.badge}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Credits](#credits)
  5. [Tests](#tests)
  6. [Questions](#questions)
  7. [License](#license)

## Description

${data.description} 

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Tests

${data.tests}

## Questions
How to contact me with questions or collaborations:

${data.gitHub}

${data.email}

## License

${data.license}`;
}

module.exports = generateMarkdown;
