const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./svgBuild');
const Shape = require('./shapes.js');

class CLI {
    constructor() {
        this.title = '';
        this.shape = new Shape();
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: "Let's create a logo! Please list the initials to be included. You can use 1-3 characters.",
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color should the text be?',
                },
                {
                    type: 'list',
                    name: 'shapeName',
                    message: "What shape should the logo be?",
                    choices: ['circle', 'square', 'triangle'],
                },
                {
                    type: 'input',
                    name: 'fill',
                    message: "What color should the logo shape be?",
                },
            ])
            .then(({ text, textColor, shapeName, fill }) => {
                this.title = `${text}'s Tasks`;
                this.shape.setText(text);
                this.shape.setTextColor(textColor);
                this.shape.setFillColor(fill);
                return writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'),
                    createLogo(this.title, {
                        shape: shapeName,
                        fill,
                        text,
                        textColor,
                    })
                );
            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => {
                console.error(err);
                console.error('Oops. Something went wrong.');
            });
    }
}

module.exports = CLI;