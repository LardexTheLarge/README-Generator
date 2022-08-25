const apache =
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const gnu =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const npmPack =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const openBSD =
  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
const Rust =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const WordPress =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) {
    return "";
  } else {
    switch (license) {
      case data.license[0]:
        apache = data.license;
        break;
      case data.license[1]:
        gnu = data.license;
        break;
      case data.license[2]:
        npmPack = data.license;
        break;
      case data.license[3]:
        openBSD = data.license;
        break;
      case data.license[4]:
        Rust = data.license;
        break;
      case data.license[5]:
        WordPress = data.license;
        break;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);

  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation

  ${data.instal}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credit}

  ## License

  ${data.license}

  ## Test

  ${data.test}

  ## Questions

  GitHub: [${data.username}](https://github.com/${data.username})\n
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
