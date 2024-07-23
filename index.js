import fs from 'fs';
import inquirer from 'inquirer';

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is your bio?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'What is your Github URL?',
        name: 'github',
    },
])

    .then((response) => 
    {   
        let htmlDocument = 
        `<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title>HTML Display</title>
    </head>
    <body>
        <header>
            <h1>${response.name}</h1>
            <h2>${response.location}</h2>
        </header>
        <section>
            <h3>${response.bio}</h3>
            <h3>${response.linkedIn}</h3>
            <h3>${response.github}</h3>
        </section>
    </body>
</html>`;
        fs.writeFile('index.html', htmlDocument, err => {
            if (err) {
                console.error(err);
            } else {
                console.log("File Written Successfully");
            }
        });
    }
)