'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');

var foldername = path.basename(process.cwd());

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('generator-django-environ') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'Whats the name of the project?',
      default: foldername
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    const appDir = this.destinationPath(this.props.appName);

    mkdirp.sync(appDir);

    this.fs.write(appDir + '/__init__.py', '');
    this.fs.write(appDir + '/settings/__init__.py', '');
    this.fs.write(this.destinationPath('locale/.gitkeep'), '');

    const filesToCopy = [
      ['manage.py', 'manage.py'],
      ['env.sample', '.env.sample'],
      ['gitignore', '.gitignore'],
      ['editorconfig', '.editorconfig'],
      ['pytest.ini', 'pytest.ini'],
      ['requirements.txt', 'requirements.txt'],
      ['requirements/base.txt', 'requirements/base.txt'],
      ['requirements/dev.txt', 'requirements/dev.txt'],
      ['requirements/prod.txt', 'requirements/prod.txt'],
      ['requirements/test.txt', 'requirements/test.txt'],
      ['settings/base.py', this.props.appName + '/settings/base.py'],
      ['settings/dev.py', this.props.appName + '/settings/dev.py'],
      ['settings/prod.py', this.props.appName + '/settings/test.py'],
      ['settings/prod.py', this.props.appName + '/settings/prod.py'],
      ['urls.py', this.props.appName + '/urls.py'],
      ['wsgi.py', this.props.appName + '/wsgi.py']
    ];

    filesToCopy.forEach(name => {
      this.fs.copyTpl(
        this.templatePath(name[0]),
        this.destinationPath(name[1]),
        this.props
      );
    });
  },

  install: function () {}
});
