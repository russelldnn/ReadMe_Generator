
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-important)

  ## Description

  ${data.description}

  ## table of contents

  - [Description] (#description)
  - [installation] (#installation)

  ## installation
  ${data.install}

  ## Use
  ${data.goal}

  ## Acknowledgements
  ${data.acknowledgements}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  <br>
  Use of this application/Program is controlled and granted under the ${data.license} license found at <https://opensource.org/licenses/${data.license}>

  ## Testing
  ${data.testing}

  ## Questions?
  if you have further questions feel free to email me at ${data.email} or check my github for clarification at ${data.github}



`;
}

module.exports = generateMarkdown;
