const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./svgbuild.js');
const { Shape, Circle, Triangle, Square } = require('./shapes.js');

class CLI {
    constructor() {
        this.title = '';
        this.shape = new Shape();
    }

    run() {
        return inquirer
        //prompts for CLI questions
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: "Let's create a logo! Please enter up to three characters for the logo text:",
                    validate: function (input) {
                        return input.length <= 3 ? true : 'Please enter up to three characters.';
                    },
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter the text color:',
                },
                {
                    type: 'list',
                    name: 'shapeName',
                    message: 'Select a shape for the logo:',
                    choices: ['circle', 'triangle', 'square'],
                },
                {
                    type: 'input',
                    name: 'fill',
                    message: 'Enter the shape color:',
                },
            ])
            //setting parameters to match function variables
            .then(({ text, textColor, shapeName, fill }) => {
                this.title = text;
                this.shape.setFillColor(fill);
                this.shape.setText(text);
                this.shape.setTextColor(textColor);
                return writeFile(
                    join(__dirname, '..', 'examples', 'logo.svg'),
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
