//badge image variables
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

//badge description variables
const apacheDes =
  "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
const gnuDes =
  "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
const npmPackDes =
  "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
const openBSD_Des =
  "A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.";
const RustDes =
  "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
const WordPressDes =
  "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";

function renderLicenseBadge(data) {
  if (data == "") {
    return "";
  } else {
    var badge = "";
    switch (data.license) {
      case "Apache":
        badge = apache;
        break;
      case "GNU":
        badge = gnu;
        break;
      case "npm packages":
        badge = npmPack;
        break;
      case "OpenBSD":
        badge = openBSD;
        break;
      case "Rust":
        badge = Rust;
        break;
      case "WordPress":
        badge = WordPress;
        break;
    }
    console.log(data);

    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data == "") {
    return "";
  } else {
    var badgeDes = "";
    switch (data.license) {
      case "Apache":
        badgeDes = apacheDes;
        break;
      case "GNU":
        badgeDes = gnuDes;
        break;
      case "npm packages":
        badgeDes = npmPackDes;
        break;
      case "OpenBSD":
        badgeDes = openBSD_Des;
        break;
      case "Rust":
        badgeDes = RustDes;
        break;
      case "WordPress":
        badgeDes = WordPressDes;
        break;
    }
    console.log(data);

    return badgeDes;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);

  return `# ${data.title}

  ## Description

  ${data.description}\n
  ${renderLicenseBadge(data)}

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

  ${renderLicenseSection(data)}
  
  ## Test

  ${data.test}

  ## Questions

  GitHub: [${data.username}](https://github.com/${data.username})\n
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
