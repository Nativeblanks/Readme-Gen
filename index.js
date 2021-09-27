const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// Prompt questions
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name: "
        },
        {
            type: "input",
            name: "title",
            message: "Enter the title of your application or program: "
        },
        {
            type: "input",
            name: "description",
            message: "Please add a description: "
        },
        {
            type: "input",
            name: "installation",
            message: "Enter Installation instructions: ",
            
        },
        {
            type: "input",
            name: "usage",
            message: "Enter insturction on how to use your application: "
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter contributing guidelines: "
        },
        {
            type: "input",
            name: "test",
            message: "Enter test instructions: "
        },
        {
            type: "list",
            name: "license",
            message: "Select your license",
            choices: [
                "Apache license 2.0",
                'BSD 3-Clause "New" or "Revised" license',
                'BSD 2-Clause "Simplified" or "FreeBSD" license',
                'GNU General Public License (GPL)',
                'GNU Library or "Lesser" General Public License (LGPL)',
                'MIT',
                'Mozilla Public License 2.0',
                'Eclipse Public License version 2.0'
            ]
        },
        {
            type: "input",
            name: "github",
            message: "Enter yout GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter yout email address: "
        },
    ]);
}

// badges from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// Function for our license badges
const selectedLicense = (answers) => {
    // Switch case to return corresponding badge of selected license
    switch(answers.license){
        case 'Apache license 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'BSD 3-Clause "New" or "Revised" license':
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case 'BSD 2-clause license':
            return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'GNU General Public License (GPL)':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        case 'GNU Library or "Lesser" General Public License (LGPL)':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    }
}

//  Licenses info from https://opensource.org/licenses

const selectedLicenseInfo = (answers) => {
    // Switch case to return corresponding license info
    switch(answers.license){
        case 'Apache license 2.0':
            return ` 
    Copyright 2021 ${answers.name}
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
            `;
        case 'BSD 3-Clause "New" or "Revised" license':
            return `
         Copyright 2021 ${answers.name}
         Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        `;
        case 'BSD 2-clause license':
            return `
         Copyright 2021 ${answers.name}
         Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            `;
        case 'GNU General Public License (GPL)':
            return `
            Copyright (C) 2021  ${answers.name}
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        case 'GNU Library or "Lesser" General Public License (LGPL)':
            return `
    Licenced under GNU Lesser General Public License v3.0 
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
        case 'MIT':
            return `
                Copyright 2021  ${answers.name}
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
`;
        case 'Mozilla Public License 2.0':
            return `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`;
    }
}

// Function that holds our README text
const readmeText = (answers) => {
    return`
# ${answers.title}     ${selectedLicense(answers)}
${answers.description}
    
## Table of Contents
    
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Test](#test)
5. [Questions](#questions)
6. [License](#license)
    
# Installation
${answers.installation}
# Usage
${answers.usage}
# Contributing
${answers.contributing}
# Test
${answers.test}
# Questions
If you have any questions or would like to contact me feel free to reach me at:
- Email: ${answers.email}
- Github: [${answers.github}](https://github.com/${answers.github})
## License
${selectedLicenseInfo(answers)}
`
}



// Run our promts
promptUser()
    .then(function(answers) {
        const readme = readmeText(answers);
        // create README file with the readmeText
        return writeFileAsync(`README.md`, readme);
    })
    .catch(function(err) {
        console.log(err);
      });