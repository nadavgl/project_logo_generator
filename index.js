const inquirer = require('inquirer')
const fs = require('fs');

const Circle = require('./lib/Circle')
const Triangle = require('./lib/Triangle')
const Square = require('./lib/Square')

function init() {
    console.log('Welcome to SVG generator')
    inquirer.prompt([
        {
            type: 'input',
            message: 'Add 3 characters for logo',
            name: 'characters',
            validate: input => input.length <= 3 || 'Text must be 3 characters or less'

        },
        {
            type: 'input',
            message: 'Add text color (Enter a color keyword or hexadecimal number)',
            name: 'textColor'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Pick a shape',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            message: 'Add Shape Color',
            name: 'shapeColor',
        },

    ]).then(answers => createSVG(answers));
        
    }

function createSVG(answers){
    let shape;
    if (answers.shape === 'Triangle'){
        shape = new Triangle (answers.characters, answers.textColor, answers.shapeColor)
    } else if (answers.shape === 'Circle'){
        shape = new Circle (answers.characters, answers.textColor, answers.shapeColor)
    } else if (answers.shape === 'Square'){
        shape = new Square (answers.characters, answers.textColor, answers.shapeColor)
    };



    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
</svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Congrats! Generated logo.svg');

}





init()





