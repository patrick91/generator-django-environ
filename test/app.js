'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-django-environ:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appName: 'hello'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'manage.py',
      '.env.sample',
      '.gitignore',
      '.editorconfig',
      'pytest.ini',
      'requirements.txt',
      'requirements/base.txt',
      'requirements/test.txt',
      'requirements/prod.txt',
      'locale/.gitkeep',
      'hello/__init__.py',
      'hello/settings/__init__.py',
      'hello/settings/base.py',
      'hello/settings/dev.py',
      'hello/settings/test.py',
      'hello/settings/prod.py',
      'hello/urls.py'
    ]);
  });
});
