// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Project Description
  ## Table of Contents
  ## Usage
  ### License
  ### Contributors
  #### Tests
  #### Questions
`;
}

module.exports = generateMarkdown;
