
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-important)

  ## Description

  ${data.description}

  ## table of contents

  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Acknowledgements] (#acknowledgements)
  - [License] (#license)
  - [Testing] (#testing)
  - [Questions] (#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.goal}

  ## Acknowledgements
  ${data.acknowledgements}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  <br>
  Use of this application/Program is controlled and granted under the ${data.license} license found at <https://opensource.org/licenses/${data.license}>

  ## Testing
  ${data.tests}

  ## Questions
  if you have further questions feel free to email me at ${data.email} or check my github for clarification at ${data.github}



`;
}

module.exports = generateMarkdown;
