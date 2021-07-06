
//============================CHALK NPM PACKAGE===============================

const chalk = require('chalk');  //Colorfull Terminal

console.log(chalk.blue.underline.inverse('Hello world!'));
console.log(chalk.blue.inverse('Success'));

//============================Email Validator=================================

var validator = require('validator');   //Email validator

const res = validator.isEmail("konark@gmail.com");
console.log(res);
//ternary operator
console.log(res? chalk.green.inverse(res): chalk.red.inverse(res));
