'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the brilliant ${chalk.red('Sundar UI kit')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'rootFolder',
        message: 'Specify the root folder name of your app (for example: app or src)?',
        default: "app"
      }
    ];

    return this.prompt(prompts).then(props => {      
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath(this.props.rootFolder)
    );  
  }

  install() {
    console.log("Done copying!👍");
    console.log("Nothing to install!✔");
    // this.installDependencies();
  }
};
